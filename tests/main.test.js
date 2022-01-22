import EosDefaultMethodService from "../BlockchainServices/defaults/EosService";

jest.setTimeout(1000000);

describe("Testing Wax Blockchain Service", () => {

    it('Get Account Info', async () => {
        const blockchainService = new EosDefaultMethodService();
        const accountName = "objectplayer"
        let res = await blockchainService.getAccountInfo(accountName);
        expect(res).not.toBe(null);
    })

})