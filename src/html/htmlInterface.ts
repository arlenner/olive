import { recursiveDrop } from "../utils/drop"
import { html, Html } from "./html"
import { PARENT, TARGET } from './symbols'
import './root'

/**
 * @param {HtmlCursor} tree
 * @returns {HtmlCursor}
 */
Html.prototype.insertBefore = function(tree) {
    const self = this[TARGET]
    this[PARENT].insertBefore(tree.root(), self)
    return this
}

/**
 * @returns {HtmlCursor}
 */
Html.prototype.remove = function() {
    const self = this[TARGET]
    if(self) {
        this[TARGET] = self.previousSibling
        recursiveDrop(self)
        self.remove()
    }
    return this
}

/**
 * @param {HtmlCursor} tree
 * @returns {HtmlCursor}
 */
Html.prototype.replaceWith = function(tree) {
    recursiveDrop(this[TARGET])
    this[TARGET].replaceWith(tree.root())
    return this
}

/**
 * @returns {HtmlCursor}
 */
Html.prototype.nest = function() {
    return html(this[TARGET])
}

/**
 * @returns {HtmlCursor}
 */
Html.prototype.denest = function() {
    return html(this[PARENT].parentElement)
}

/**
 * @returns {HtmlCursor}
 */
Html.prototype.mount = function(root) {
    let r = document.getElementById(root)
    r.replaceWith(this.root())
    return Html.from(r)
}

/**
 * Sets the text content of the target node. If no parameter is provided, returns the text content of the node.
 * 
 * @param {string} str
 * @returns {HtmlCursor}
 */
Html.prototype.text = function(str) {
    if(arguments.length === 0) 
      return this[TARGET].textContent
  
    this[TARGET].textContent = str
    return this
}
