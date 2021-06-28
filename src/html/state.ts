import { tinyStore } from "../tinyStore"
import { getStores, getUpdates, registerDispatcher } from "./globalVars"
import { Html } from "./html"
import { DISPATCHER_ID, NO_REDUCER, PARENT, TARGET } from "./symbols"

/**
 * @template T
 * @param {Dispatcher<T>} store 
 * @returns 
 */
Html.prototype.use = function(dispatcher) {
    registerDispatcher(dispatcher)
    this[TARGET][DISPATCHER_ID] = dispatcher.id
    return this
}

Html.prototype.dispatch = function(k, data) {
    const UPDATES = getUpdates()
    const STORES = getStores()

    const { dispatch, state, id } = defaultDispatcher()

    dispatch([k, data])
    
    if(UPDATES[k]) {
        const passData = STORES[id][NO_REDUCER] ? data : state()
        UPDATES[k].forEach(f => f(passData))
    }
}

export const defaultDispatcher = () => {
    const STORES = getStores()
    if(STORES['olive-default-dispatcher']) {
        return STORES['olive-default-dispatcher']
    }
    const devLogger = (model, action) => {
        const [k, data] = action
        console.log(`Store ${'olive-default-dispatcher'} is proccessing action [${k}]${data ? ` with data ${JSON.stringify(data, null, 2)}` : '.'}`)
        console.log(`Store ${'olive-default-dispatcher'}'s model: ${JSON.stringify(model, null, 2)}`)
    }
    const dispatcher = tinyStore({id: 'olive-default-dispatcher', mw: devLogger})
    registerDispatcher(dispatcher)
    return dispatcher
}

export const customDispatcher = ({ id = 'olive-default-dispatcher', model = null, reducer = null, mw = null} = {}) => {
    const STORES = getStores()
    if(STORES[id]) {
        return STORES[id]
    }
    const dispatcher = tinyStore({ id, model, reducer, mw })
    registerDispatcher(dispatcher)
    return dispatcher
}
    