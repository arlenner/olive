import { Html } from "./html"
import { PARENT } from "./symbols"

/**
 * Returns the real HTML root element of the given Html wrapper object tree.
 * @name Html#root
 * @returns {HTMLElement}
 */
Html.prototype.root = function() {
    let mtop = this[PARENT]

    while(mtop.parentElement) {
        mtop = mtop.parentElement
    }
    return mtop
}
