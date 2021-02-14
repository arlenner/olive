export const pipe = (...fns) => (model, action) => {
    let result = action
    fns.forEach(fn => {
        result = fn(model, result)
    })
    return result
  }
  
const deepCopy = obj => {
    let result = {}
    Object.keys(obj).forEach(k => 
      result[k] = (
        Array.isArray(obj[k])      ? obj[k].slice()
      : typeof obj[k] === 'object' ? deepCopy(obj[k])
      : /*else*/                     obj[k]
      )
    )
    return result
  }
  
export const tinyStore = (model, rdfn, mw = null) => {
      let store = deepCopy(model)
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
        store = rdfn(store, result)
    
        while(queue.length > 0) {
            let a = queue.pop()
            result = mw(store, a)
            store = rdfn(store, result)
        }      
        dispatching = false
    }    
    return { state, dispatch }
}
  