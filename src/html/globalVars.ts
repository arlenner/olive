const UPDATES = {}

const ROUTER = {}

const STORES = {}

export const getUpdates = (scope = null) => {
    if(scope) {
        return UPDATES[scope.id]
    }
    return UPDATES
}

export const getRouter = () => ROUTER

export const getStores = () => STORES

export const registerDispatcher = disp => STORES[disp.id] = disp