
export const recursiveDrop = target => {
    if(target.children) {
        target.children.forEach(recursiveDrop)
    }
    if(target.drop) target.drop()
}
  
export const setDrop = (cur, drop) => {
    let d2 = cur && cur.drop
        ? cur.drop
        : null
    cur.drop = d2
        ? () => { drop(); d2() }
        : drop
}