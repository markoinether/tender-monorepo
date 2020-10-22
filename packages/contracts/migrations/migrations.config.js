const BN = require('bn.js')
const TOKEN_UNIT =  (new BN(10)).pow(new BN(18))

module.exports =  {
    NULL_ADDRESS: "0x0000000000000000000000000000000000000000",
    INITIAL_LIQUIDITY: (new BN(5000)).mul(TOKEN_UNIT),
    INITIAL_WEIGHT: (new BN(1)).mul(TOKEN_UNIT),
    SWAP_FEE: TOKEN_UNIT.div(new BN(100)).toString(),
    LIVEPEER_TOKEN: "0x630589690929E9cdEFDeF0734717a9eF3Ec7Fcfe",
    LIVEPEER_TOKEN_FAUCET: "0x6eD79Aa1c71FD7BdBC515EfdA3Bd4e26394435cC",
    LIVEPEER_BONDINGMANAGER: "0x5017A545b09ab9a30499DE7F431DF0855bCb7275",
    LIVEPEER_ROUNDSMANAGER: "0x2D8BE6BF0baA74e0A907016679CaE9190e80dD0A",
    CRP_FACTORY: "0xe982E462b094850F12AF94d21D470e21bE9D0E9C",
    BPOOL_FACTORY: "0xCfEB869F69431e42cdB54A4F4f105C19C080A601",


}