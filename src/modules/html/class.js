import { Html } from './html'
import { TARGET } from './symbols'

Html.prototype.class = function (...args) {
    let t = this[TARGET]
    for(let i = 0; i < args.length; i++) {
        let str = args[i]
        t.classList.add(str)
    }
    return this
}

Html.prototype.removeClass = function(...args) {
    let t = this[TARGET]
    for(let i = 0; i < args.length; i++) {
        let str = args[i]
        t.classList.remove(str)
    }
    return this
}
