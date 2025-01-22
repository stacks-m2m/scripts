import { NetworkAddressMap, NetworkTraitsMap } from "./types";

export const DEPLOYER = ""; // for testnet, need to redeploy
export const CONTRACT_NAME = "aibtcdev-aibtc"; // for testnet, need to redeploy
export const TOKEN_CONTRACT_NAME = "aibtc-token"; // for testnet, need to redeploy

export const DEPLOYERS = {
  mainnet: "SP2XCME6ED8RERGR9R7YDZW7CA6G3F113Y8JMVA46",
  testnet: "ST1994Y3P6ZDJX476QFSABEFE5T6YMTJT0T7RSQDW",
  devnet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
  mocknet: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
};

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
    BITFLOW_CORE: "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.xyk-core-v-1-2",
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
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-v1.aibtcdev-base-dao",
    DAO_PROPOSAL:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.proposal",
    DAO_EXTENSION:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.extension",
    DAO_ACTION_PROPOSALS:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.action-proposals",
    DAO_CORE_PROPOSALS:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.core-proposals",
    DAO_TREASURY:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.treasury",
    DAO_MESSAGING:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.messaging",
    DAO_BANK_ACCOUNT:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.bank-account",
    DAO_RESOURCES:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.resources",
    DAO_INVOICES:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.invoices",
    DAO_ACTION:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.action",
    DAO_TOKEN_DEX:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.token-dex",
    DAO_TOKEN_OWNER:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.token-owner",
    DAO_TOKEN:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.token",
    DAO_BITFLOW_POOL:
      "SP29CK9990DQGE9RGTT1VEQTTYH8KY4E3JE5XP4EC.aibtcdev-dao-traits-v1.bitflow-pool",
    BITFLOW_POOL:
      "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.xyk-pool-trait-v-1-2.xyk-pool-trait",
    BITFLOW_SIP010:
      "SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.sip-010-trait-ft-standard-v-1-1.sip-010-trait",
  },
  testnet: {
    SIP10:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.sip-010-trait-ft-standard.sip-010-trait",
    SIP09: "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.nft-trait.nft-trait",
    DAO_BASE:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-v1.aibtcdev-base-dao",
    DAO_PROPOSAL:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.proposal",
    DAO_EXTENSION:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.extension",
    DAO_ACTION_PROPOSALS:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.action-proposals",
    DAO_CORE_PROPOSALS:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.core-proposals",
    DAO_TREASURY:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.treasury",
    DAO_MESSAGING:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.messaging",
    DAO_BANK_ACCOUNT:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.bank-account",
    DAO_RESOURCES:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.resources",
    DAO_INVOICES:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.invoices",
    DAO_ACTION:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.action",
    DAO_TOKEN_DEX:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.token-dex",
    DAO_TOKEN_OWNER:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.token-owner",
    DAO_TOKEN:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.token",
    DAO_BITFLOW_POOL:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.aibtcdev-dao-traits-v1.bitflow-pool",
    BITFLOW_POOL:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.xyk-pool-trait-v-1-2.xyk-pool-trait",
    BITFLOW_SIP010:
      "STTWD9SPRQVD3P733V89SV0P8RZRZNQADG034F0A.sip-010-trait-ft-standard.sip-010-trait",
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
    BITFLOW_SIP010: "",
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
    BITFLOW_SIP010: "",
  },
};
