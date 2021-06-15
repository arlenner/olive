export const deepCopy = o => {
    let r
    if(o === null) return null
    else if(Array.isArray(o) || typeof o === 'string') {
        r = o.slice()
    }
    else if(typeof o === 'object') {
        r = {}
        Object.keys(o).forEach(k => r[k] = deepCopy(o[k]))
    }
    else { r = o }
    return r
}