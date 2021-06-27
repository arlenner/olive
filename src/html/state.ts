import { tinyStore } from "../tinyStore"
import { getStores, getUpdates, registerDispatcher } from "./globalVars"
import { Html } from "./html"
import { NO_REDUCER, PARENT, TARGET } from "./symbols"

/**
 * @template T
 * @param {Dispatcher<T>} store 
 * @returns 
 */
Html.prototype.use = function(store) {
    this[TARGET].store = store
    return this
}

Html.prototype.dispatch = function(k, data, bubbles = false) {
    const UPDATES = getUpdates()
    const STORES = getStores()

    let nearestStore = getNearestStore(this[PARENT]) || defaultDispatcher()

    const { id, dispatch, state } = STORES[nearestStore.id]
    dispatch([k, data])
    
    //default dispatcher should re-route to all other dispatchers, bubbling is n/a
    if(id === 'olive-default-dispatcher') {
        Object.keys(UPDATES).forEach(subId => {

            const { 
                state: _state,
                dispatch: _dispatch 
            } = STORES[subId]
            
            _dispatch([k, data])

            if(UPDATES[subId][k]) {
                console.log(data)
                const passData = STORES[subId][NO_REDUCER] ? data : _state() 
                console.log('passData ' + JSON.stringify(passData, null, 2))
                console.log(subId)
                UPDATES[subId][k].forEach(f => f(passData))
            }
        })
        return 
    }

    if(bubbles) {
        let nextStore
        nextStore = getNextNearestStore(nearestStore, this[PARENT])
        if(nextStore) {
            nextStore.dispatch([k, data])
            if(UPDATES[nextStore.id] && UPDATES[nextStore.id][k]) {
                const passData = nextStore[NO_REDUCER] ? data : nextStore.state() 
                UPDATES[nextStore.id][k].forEach(f => f(passData))
            }
        }
    }    

    if(UPDATES[id] && UPDATES[id][k]) {
        const passData = STORES[id][NO_REDUCER] ? data : state()
        UPDATES[id][k].forEach(f => f(passData))
    }
}

export const getNearestStore = (elem) => {    
    let nearestStore
    let element_might_have_store = elem
    while(element_might_have_store) {
        if(element_might_have_store.store) {
            nearestStore = element_might_have_store.store

            break
        }
        else {
            if(element_might_have_store.previousElementSibling) {
                element_might_have_store = element_might_have_store.previousElementSibling
            }
            else if(element_might_have_store.parentElement) {
                element_might_have_store = element_might_have_store.parentElement
            }
            else element_might_have_store = null
        }
    }
    return nearestStore
}

export const getNextNearestStore = (store, elem) => {
    let nearestStore
    let m_store = elem
    while(m_store) {
        if(m_store.store && m_store.store.id !== store.id) {
            nearestStore = m_store.store
            break
        }
        else m_store = m_store.parentElement
    }
    return nearestStore
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
    