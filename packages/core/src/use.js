
export function bindUse(jsJoda) {
    const used = [];

    return function use(fn) {
        if (!~used.indexOf(fn)) {
            fn(jsJoda);
            used.push(fn);
        }
        return jsJoda;
    };
}
