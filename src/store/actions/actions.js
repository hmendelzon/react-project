function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const actions = new Proxy(
    {},
    {
        get: function (target, props) {
            if (target[props] === undefined)
                target[props] = function (args) {
                    return {
                        type: convertActionNameToType(props),
                        payload: args
                    };
                };
            return target[props];
        }
    }
);