import { TARGET, PARENT } from './symbols'
import '../../index'
import { HtmlCursor } from './types'


export function Html(p?: HTMLElement) {
    this[TARGET] = null
    this[PARENT] = p || document.createDocumentFragment()
    if(p) {
        this[TARGET] = p.lastElementChild
    }
}

export const html: (p?: HTMLElement) => HtmlCursor = (p?: HTMLElement) => new Html(p)

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




