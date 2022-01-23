import EosioTokenContract from "../BlockchainServices/contracts/EosioTokenContract";
import EosDefaultMethodService from "../BlockchainServices/defaults/EosService";

jest.setTimeout(1000000);

describe("Testing Wax Blockchain Service", () => {

    it('Get Account Info', async () => {
        const blockchainService = new EosDefaultMethodService();
        const accountName = "objectplayer"
        let res = await blockchainService.getAccountInfo(accountName);
        expect(res).not.toBe(null);
    })

    it('Get User Balance', async () => {
        const blockchainService = new EosDefaultMethodService();
        const accountName = "objectplayer"
        let res = await blockchainService.getUserBalance(accountName);
        expect(res).not.toBe(null);
    })

    it('Get Transaction Details', async () => {
        const blockchainService = new EosDefaultMethodService();
        const trxId = "74d4757412b973c1427ec6605ab7583b527c6482c3f6d64dcf59b9f9c752212f"
        let res = await blockchainService.getTransactionDetails(trxId);
        expect(res).not.toBe(null);
    })

    it('Transfer token', async () => {
        const blockchainService = new EosDefaultMethodService();
        const eosioTokenContract = new EosioTokenContract();

        const from = "objectplayer";
        const to = "shamgoswamii";
        const quantity = "1.00000000 WAX";
        const memo = "testing"

        const transferAction = eosioTokenContract.eosioTokenContract(from,to,quantity,memo)        
        let res = await blockchainService.defaultPushAction(transferAction);
        expect(res).not.toBe(null);
    })


})