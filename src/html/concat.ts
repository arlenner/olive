import { Html } from "./html"
import { PARENT } from "./symbols"

/**
 * Concatenates a given Html wrapper-object tree onto this tree at the `TARGET` position.
 * @param {import("../..").HtmlWrapper} tree The Html wrapper-object tree to concatenate to this tree
 * @returns 
 */
Html.prototype.concat = function(tree) {
    this[PARENT].appendChild(tree.root())
    return this
}

