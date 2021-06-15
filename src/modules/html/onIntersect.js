import { Html } from "./html"
import { TARGET } from "./symbols"

Html.prototype.onIntersect = function (fn, opts = {}) {
    const self = this[TARGET]
  
    let cb = function(entries) {
        entries.forEach(entry => {
            fn(Html.from(entry.target), entry)
        })
    }
  
    const intersector = new IntersectionObserver(cb, opts)
    intersector.observe(self)
    return this
}