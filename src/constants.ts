import { NetworkAddressMap, NetworkTraitsMap } from "./types";

export const DEPLOYER = ""; // for testnet, need to redeploy
export const CONTRACT_NAME = "aibtcdev-aibtc"; // for testnet, need to redeploy
export const TOKEN_CONTRACT_NAME = "aibtc-token"; // for testnet, need to redeploy

export const ADDRESSES: NetworkAddressMap = {
  mainnet: {
    BURN: "SP000000000000000000002Q6VF78",
    POX: "SP000000000000000000002Q6VF78.pox-4",
    STXCITY_SWAP_FEE: "SP1WRH525WGKZJDCY8FSYASWVNVYB62580QNARMXP",
    STXCITY_COMPLETE_FEE: "SP1JYZFESCWMGPWQR4BJTDZRXTHTXXYFEVJECNTY7",
    STXCITY_TOKEN_DEPLOYMENT_FEE: "SP11WRT9TPPKP5492X3VE81CM1T74MD13SPFT527D",
    STXCITY_DEX_DEPLOYMENT_FEE: "SP1WG62TA0D3K980WGSTZ0QA071TZD4ZXNKP0FQZ7",
    BITFLOW_CORE: "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.xyk-core-v-1-2",
    BITFLOW_STX_TOKEN:
      "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.token-stx-v-1-2",
    BITFLOW_FEE: "SP31C60QVZKZ9CMMZX73TQ3F3ZZNS89YX2DCCFT8P",
  },
  testnet: {
    BURN: "ST000000000000000000002AMW42H",
    POX: "ST000000000000000000002AMW42H.pox-4",
    STXCITY_SWAP_FEE: "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1",
    STXCITY_COMPLETE_FEE: "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1",
    STXCITY_TOKEN_DEPLOYMENT_FEE: "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1",
    STXCITY_DEX_DEPLOYMENT_FEE: "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1",
    BITFLOW_CORE: "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.xyk-core-v-1-2",
    BITFLOW_STX_TOKEN:
      "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1.token-stx-v-1-2",
    BITFLOW_FEE: "ST295MNE41DC74QYCPRS8N37YYMC06N6Q3VQDZ6G1",
  },
  devnet: {
    BURN: "",
    POX: "",
    STXCITY_SWAP_FEE: "",
    STXCITY_COMPLETE_FEE: "",
    STXCITY_TOKEN_DEPLOYMENT_FEE: "",
    STXCITY_DEX_DEPLOYMENT_FEE: "",
    BITFLOW_CORE: "",
    BITFLOW_STX_TOKEN: "",
    BITFLOW_FEE: "",
  },
  mocknet: {
    BURN: "",
    POX: "",
    STXCITY_SWAP_FEE: "",
    STXCITY_COMPLETE_FEE: "",
    STXCITY_TOKEN_DEPLOYMENT_FEE: "",
    STXCITY_DEX_DEPLOYMENT_FEE: "",
    BITFLOW_CORE: "",
    BITFLOW_STX_TOKEN: "",
    BITFLOW_FEE: "",
  },
};

export const TRAITS: NetworkTraitsMap = {
  mainnet: {
    SIP10:
      "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait",
    SIP09: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait",
    DAO_BASE:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-v1.aibtcdev-base-dao",
    DAO_PROPOSAL:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.proposal",
    DAO_EXTENSION:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.extension",
    DAO_ACTION_PROPOSALS:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.action-proposals",
    DAO_CORE_PROPOSALS:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.core-proposals",
    DAO_TREASURY:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.treasury",
    DAO_MESSAGING:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.messaging",
    DAO_BANK_ACCOUNT:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.bank-account",
    DAO_RESOURCES:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.resources",
    DAO_INVOICES:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.invoices",
    DAO_ACTION:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.action",
    DAO_TOKEN_DEX:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.token-dex",
    DAO_TOKEN_OWNER:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.token-owner",
    DAO_TOKEN:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.token",
    DAO_BITFLOW_POOL:
      "SPTWD9SPRQVD3P733V89SV0P8RZRZNQADJHHPME1.aibtcdev-dao-traits-v1.bitflow-pool",
    BITFLOW_POOL:
      "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.xyk-pool-trait-v-1-2.xyk-pool-trait",
  },
  testnet: {
    SIP10:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.sip-010-trait-ft-standard.sip-010-trait",
    SIP09: "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.nft-trait.nft-trait",
    DAO_BASE:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-v1.aibtcdev-base-dao",
    DAO_PROPOSAL:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.proposal",
    DAO_EXTENSION:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.extension",
    DAO_ACTION_PROPOSALS:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.action-proposals",
    DAO_CORE_PROPOSALS:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.core-proposals",
    DAO_TREASURY:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.treasury",
    DAO_MESSAGING:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.messaging",
    DAO_BANK_ACCOUNT:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.bank-account",
    DAO_RESOURCES:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.resources",
    DAO_INVOICES:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.invoices",
    DAO_ACTION:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.action",
    DAO_TOKEN_DEX:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.token-dex",
    DAO_TOKEN_OWNER:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.token-owner",
    DAO_TOKEN:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.token",
    DAO_BITFLOW_POOL:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.aibtcdev-dao-traits-v1.bitflow-pool",
    BITFLOW_POOL:
      "ST6BBNM7Q8GKDG2FMKRBZJCJ3SE4BWVC1YSF2XKD.xyk-pool-trait-v-1-2.xyk-pool-trait",
  },
  devnet: {
    SIP10: "",
    SIP09: "",
    DAO_BASE: "",
    DAO_PROPOSAL: "",
    DAO_EXTENSION: "",
    DAO_ACTION_PROPOSALS: "",
    DAO_CORE_PROPOSALS: "",
    DAO_TREASURY: "",
    DAO_MESSAGING: "",
    DAO_BANK_ACCOUNT: "",
    DAO_RESOURCES: "",
    DAO_INVOICES: "",
    DAO_ACTION: "",
    DAO_TOKEN_DEX: "",
    DAO_TOKEN_OWNER: "",
    DAO_TOKEN: "",
    DAO_BITFLOW_POOL: "",
    BITFLOW_POOL: "",
  },
  mocknet: {
    SIP10: "",
    SIP09: "",
    DAO_BASE: "",
    DAO_PROPOSAL: "",
    DAO_EXTENSION: "",
    DAO_ACTION_PROPOSALS: "",
    DAO_CORE_PROPOSALS: "",
    DAO_TREASURY: "",
    DAO_MESSAGING: "",
    DAO_BANK_ACCOUNT: "",
    DAO_RESOURCES: "",
    DAO_INVOICES: "",
    DAO_ACTION: "",
    DAO_TOKEN_DEX: "",
    DAO_TOKEN_OWNER: "",
    DAO_TOKEN: "",
    DAO_BITFLOW_POOL: "",
    BITFLOW_POOL: "",
  },
};
