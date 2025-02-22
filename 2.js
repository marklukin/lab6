const compose = (...fns) => {
    const handlers = [];
    const composed = (x) => {
        if (fns.length === 0) return x;

        const last = fns.length - 1;
        let res = x;
        try {
            for (let i = last; i >= 0; i--) {
                res = fns[i](res);
            }
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined;
        }
    }
    composed.on = (name, handler) => {
        if (name === 'error') {
            handlers.push(handler);
        }
    }
    return composed;
};