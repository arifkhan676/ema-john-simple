
const getUser = () => {
    const extinhuisher = sessionStorage.getItem('userId');

    if (extinhuisher) {
        return extinhuisher;
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}

const getDataKey = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data)
}

const addToCartDatabase = (id, count) => {
    const currentCart = getDatabaseCart();
    currentCart[id] = count
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart))
}

const removeFromDatabaseCart = id => {
    const currentCart = getDatabaseCart();
    delete currentCart[id];
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart))
}
const processOrder = (cart) => {
    localStorage.removeItem(getDataKey());
}

export { addToCartDatabase, getDatabaseCart, removeFromDatabaseCart, processOrder }

const localStorage = window.localStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toSring()
        },
        clear() {
            store = {}
        }
    }
})()

const sessionStorage = window.localStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toSring()
        },
        clear() {
            store = {}
        }
    }
})()


