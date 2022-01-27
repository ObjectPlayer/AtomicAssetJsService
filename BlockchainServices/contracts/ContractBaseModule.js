
export default class ContractBaseModule {

    getAuthorization = (actor, permission) => {
        return { actor, permission };
    };

    getAction = (contractName, actonName, data, authorization) => {
        return {
            actions: [
                {
                    account: contractName,
                    name: actonName,
                    authorization,
                    data,
                },
            ],
        };
    };
}