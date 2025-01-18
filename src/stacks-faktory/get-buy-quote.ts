import { FaktorySDK } from "@faktoryfun/core-sdk";
import { CONFIG, deriveChildAccount } from "../utilities";
import dotenv from "dotenv";

dotenv.config();

const stxAmount = Number(process.argv[2]);
const dexContract = process.argv[3];
const slippage = Number(process.argv[4]) || 15; // default 15%
const forcedNetwork = process.argv[5] || "mainnet"; // Allow network override via command line

console.log("\nGetting buy quote with parameters:");
console.log("STX Amount:", stxAmount);
console.log("DEX Contract:", dexContract);
console.log("Slippage (%):", slippage);
console.log("Network:", forcedNetwork);

if (!stxAmount || !dexContract) {
  console.error("Please provide all required parameters:");
  console.error(
    "ts-node src/faktory/get-buy-quote.ts <stx_amount> <dex_contract> [slippage] [network]"
  );
  process.exit(1);
}

const sdk = new FaktorySDK({
  network: "mainnet", // Force mainnet
  apiHost: "https://faktory-be.vercel.app/api", // Force mainnet API
  hiroApiKey: CONFIG.HIRO_API_KEY,
});

(async () => {
  try {
    const { address } = await deriveChildAccount(
      forcedNetwork, // Pass the network to deriveChildAccount
      CONFIG.MNEMONIC,
      CONFIG.ACCOUNT_INDEX
    );

    // First get the quote
    console.log("\nGetting quote...");
    const buyQuote = await sdk.getIn(
      dexContract,
      address,
      stxAmount * 1000000 // Convert to microSTX
    );

    console.log("\nBuy Quote:");
    console.log(JSON.stringify(buyQuote, null, 2));

    // Then get the full buy parameters
    console.log("\nGetting buy parameters...");
    const buyParams = await sdk.getBuyParams({
      dexContract,
      ustx: stxAmount * 1000000,
      senderAddress: address,
      slippage,
    });

    console.log("\nBuy Parameters:");
    console.log(JSON.stringify(buyParams, null, 2));
  } catch (error) {
    console.error("Error getting buy quote:", error);
    process.exit(1);
  }
})();
