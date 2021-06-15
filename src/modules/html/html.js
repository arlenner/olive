import { TARGET, PARENT } from './symbols'
import { HtmlCursor } from './types'
import '../../index'


/**
 * Internal HtmlCursor constructor
 * @param {HTMLElement} [p] 
 * @returns {HtmlCursor}
 */
export function Html(p) {
    this[TARGET] = null
    this[PARENT] = p || document.createDocumentFragment()
    if(p) {
        this[TARGET] = p.lastElementChild
    }
}

/**
 * Root of all components.
 * @param {HTMLElement} [p] 
 * @returns {HtmlCursor}
 */
export const html = p => new Html(p)

/**
 * Call an arbitrary side-effecting function without changing the flow of the `HtmlCursor` selection.
 * @param {(hx: HtmlCursor) => void} f 
 * @returns 
 */
Html.prototype.tap = function(f) {
    const self = this[TARGET]
    f(Html.from(self))
    return this
} 

Html.prototype.getTarget = function() {
    return this[TARGET]
}
  
/**
 * Lifts a `target` `HTMLElement` into the `HtmlCursor` context.
 * @param {HTMLElement} target the Html Element to select with an HtmlCursor instance
 * @returns {HtmlCursor}
 */
Html.from = function(target) {
    let r = html(target.parentElement)
    r[TARGET] = target
    return r
}




