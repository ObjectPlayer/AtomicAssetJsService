import EosioTokenContract from "../BlockchainServices/contracts/EosioTokenContract";
import EosDefaultMethodService from "../BlockchainServices/defaults/EosService";
import { ACCOUNT_NAME_1, ACCOUNT_NAME_2, AMOUNT, MEMO, TRANSACTION_ID } from "./assets/constants"

jest.setTimeout(1000000);

describe("Testing Wax Blockchain Service", () => {

    it('Get Account Info', async () => {
        const blockchainService = new EosDefaultMethodService();
        const accountName = ACCOUNT_NAME_1
        let res = await blockchainService.getAccountInfo(accountName);
        expect(res).not.toBe(null);
    })

    it('Get User Balance', async () => {
        const blockchainService = new EosDefaultMethodService();
        const accountName = ACCOUNT_NAME_1
        let res = await blockchainService.getUserBalance(accountName);
        expect(res).not.toBe(null);
    })

    it('Get Transaction Details', async () => {
        const blockchainService = new EosDefaultMethodService();
        const trxId = TRANSACTION_ID
        let res = await blockchainService.getTransactionDetails(trxId);
        expect(res).not.toBe(null);
    })

    it('Transfer token', async () => {
        const blockchainService = new EosDefaultMethodService();
        const eosioTokenContract = new EosioTokenContract();

        const from = ACCOUNT_NAME_1;
        const to = ACCOUNT_NAME_2;
        const quantity = AMOUNT;
        const memo = MEMO

        const transferAction = eosioTokenContract.eosioTokenContract(from, to, quantity, memo)
        let res = await blockchainService.defaultPushAction(transferAction);
        expect(res).not.toBe(null);
    })


})