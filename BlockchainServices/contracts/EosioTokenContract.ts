import ContractBaseModule from "./ContractBaseModule";

export default class EosioTokenContract extends ContractBaseModule {

    eosioTokenContract = "eosio.token"

    transferToken = (from, to, quantity, memo) => {
        let contract = this.eosioTokenContract;
        let actionName = "transfer";
        let authorization = this.getAuthorization(from, "active");

        let data = {
            from,
            to,
            quantity,
            memo,
        };

        let action = this.getAction(contract, actionName, data, [authorization]);
        return action;
    };
}