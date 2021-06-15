import { deepCopy } from "../utils/deepCopy"
import { NO_REDUCER } from "./html/symbols"

export const pipe = (...fns) => (model, action) => {
    let result = action
    fns.forEach(fn => {
        result = fn(model, result)
    })
    return result
  }


/**
 * @template T
 * @typedef {[k: string, data: T]} Action
 */

/**
 * @template T
 * @typedef {{ id: string, state: () => T, dispatch: (action: string, data: unknown) => void}} Store
 */
  
/**
 * @template T
 * @template A
 * @template B
 * @param {{
 *  id: string
 *  model: T
 *  reducer: (model: T, action: Action<A>) => T
 *  mw: (model: T, action: Action<A>) => Action<B>
 * }} param0 
 * @returns {Store<T>}
 */
export const tinyStore = ({id = 'olive-default-dispatcher', model = null, reducer = null, mw = null}) => {
    let store = deepCopy(model) || {}
    store.id = id
    const queue = []
    let dispatching = false
    
    const state = () => store  
    
    const dispatch = action => { 
        if(dispatching) {
            queue.push(action)
            return
        }
        dispatching = true
        let result = action
        
        if(mw && typeof mw === 'function') {
            result = mw(store, action)
        }
        if(reducer)
            store = reducer(store, result)

        while(queue.length > 0) {
            let a = queue.pop()
            result = mw(store, a)
            if(reducer)
                store = reducer(store, result)
        }      
        dispatching = false
    }    
    
    return { id: store.id, state, dispatch, [NO_REDUCER]: reducer === null || reducer === undefined }
}
  