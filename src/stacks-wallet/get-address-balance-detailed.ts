// CONFIGURATION

import { CONFIG, getAddressBalanceDetailed } from "../utilities";

// Function to format and log balance details
function logBalanceDetails(balance: any) {
  console.log("STX Balance:");
  console.log(`  Balance: ${balance.stx.balance}`);
  console.log(`  Total Sent: ${balance.stx.total_sent}`);
  console.log(`  Total Received: ${balance.stx.total_received}`);
  console.log(`  Total Fees Sent: ${balance.stx.total_fees_sent}`);
  console.log(
    `  Total Miner Rewards Received: ${balance.stx.total_miner_rewards_received}`
  );
  console.log(`  Lock TX ID: ${balance.stx.lock_tx_id}`);
  console.log(`  Locked: ${balance.stx.locked}`);
  console.log(`  Lock Height: ${balance.stx.lock_height}`);
  console.log(`  Burnchain Lock Height: ${balance.stx.burnchain_lock_height}`);
  console.log(
    `  Burnchain Unlock Height: ${balance.stx.burnchain_unlock_height}`
  );

  console.log("\nFungible Tokens:");
  for (const [token, details] of Object.entries(balance.fungible_tokens) as [
    string,
    any
  ]) {
    console.log(`  Token: ${token}`);
    console.log(`    Balance: ${details.balance}`);
    console.log(`    Total Sent: ${details.total_sent}`);
    console.log(`    Total Received: ${details.total_received}`);
  }

  console.log("\nNon-Fungible Tokens:");
  for (const [token, details] of Object.entries(
    balance.non_fungible_tokens
  ) as [string, any]) {
    console.log(`  Token: ${token}`);
    console.log(`    Count: ${details.count}`);
    console.log(`    Total Sent: ${details.total_sent}`);
    console.log(`    Total Received: ${details.total_received}`);
  }
}

// MAIN SCRIPT (DO NOT EDIT)

async function main() {
  // expect txId as first argument
  const addr = process.argv[2];
  if (!addr) {
    console.error("No address provided, exiting...");
    return;
  }

  // get transaction info from API
  try {
    const balance = await getAddressBalanceDetailed(CONFIG.NETWORK, addr);
    logBalanceDetails(balance);
  } catch (error) {
    // report error
    console.error(`General/Unexpected Failure: ${error}`);
  }
}

main();
