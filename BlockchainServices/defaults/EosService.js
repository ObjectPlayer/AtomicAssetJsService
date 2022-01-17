import { Api, JsonRpc, RpcError } from "eosjs";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
const chainId = process.env.APP_CHAINID;
const signatureProvider = new JsSignatureProvider([]);
const rpcUrl =
    process.env.APP_NETWORK_PROTOCOL +
    "://" +
    process.env.APP_RPC +
    ":" +
    process.env.APP_NETWORK_PORT;
const rpc = new JsonRpc(rpcUrl, { fetch });

export default class EosDefaultMethodService {

    getAccountInfo = async (accontName) => {
        let res = null;
        try {
            res = await rpc.get_account(accontName);
        } catch (err) {
            res = null;
        }
        return res;
    };

    getUserBalance = async (userName) => {
        var res = await rpc.get_currency_balance(
            "eosio.token",
            userName,
            tokenSymbol
        );
        if (res) {
            res = res.toString();
            return res.substr(0, res.indexOf(".") + 3);
        }
        return 0;
    };

    defaultPushAction = async (trx) => {
        let res = {
            success: false,
            message: "",
        };

        try {
            const result = await this.api.transact(trx, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
            res.message = result;
            res.success = true;
        } catch (e) {
            res.success = false;
            res.message = "Transaction Faild";
            if (e.json) {
                var errorJson = e.json.error.details[0].message;
                if (e instanceof RpcError) res.message = errorJson;
            }
        }

        return res;
    };
    
    getTransactionDetails = async (trxId) => {
        let res = null;
        try {
            let transactDetails = await rpc.history_get_transaction(trxId);
            res = transactDetails;
        } catch (err) {
            res = null;
        }
        return res;
    };
}