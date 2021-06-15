import { Html } from './html'
import { TARGET } from './symbols'

Html.prototype.css = function(styles) {
    const self = this[TARGET]
    Object.entries(styles).forEach(([k, v]) => {
        if(self.style[k] !== v)
            self.style[k] = v
    })
    return this
}