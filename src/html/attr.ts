import { Html } from './html'
import { TARGET } from './symbols'

const ATTRS = ["accept", "accesskey", "action", "alt", "autocomplete", "autofocus", "autoplay", "checked", "cite", "contenteditable", "controls", "coords", "datetime", "dir", "disabled", "download", "draggable", "for", "form", "formaction", "hidden", "href", "id", "label", "maxlength", "method", "min", "multiple", "muted", "name", "novalidate", "pattern", "placeholder", "poster", "preload", "readonly", "rel", "required", "reversed", "selected", "spellcheck", "src", "step", "tabindex", "title", "type", "value"]

/**
 * Sets the `TARGET` element's HTML attribute `k` to the given `value`.
 * @name Html#attr
 * @method
 * @memberof Html
 * @param {string} k The string name of the attribute to set. 
 * @param {any} v The value to set to the given attribute.
 * @returns {import('../..').HtmlWrapper}
 */
Html.prototype.attr = function attr(k, v) {
    this[TARGET].setAttribute(k, v)
    return this
}

/**
 * Removes attribute with name `k` from `TARGET` element.
 * @name Html#removeAttr
 * @method
 * @memberof Html
 * @param {string} k The string name of the attribute you want to remove
 */
Html.prototype.removeAttr = function(k) {
    this[TARGET].removeAttribute(k)
}

/**
 * Sets the target element's HTML attribute to `value`. If no params passed, returns the current value of the attribute.
 * @memberof Html
 * @param {unknown} value Value to assign to this attribute.
 * @returns 
 * 
 * ```js
 *  const someRealElem = document.querySelector('input[type=text]')
 *  const wrapper = Html.from(someRealElem)
 * 
 *  //set
 *  wrapper.valueAttr('Hello')
 *  //get
 *  const textValue = wrapper.valueAttr() //=> 'Hello'
 * 
 *  
 * ```
 */
ATTRS.forEach(attr => {
    Html.prototype[attr+'Attr'] = function(value) {
        if(!value) {
            return this[TARGET][attr] || this[TARGET].getAttribute(attr)
        }
        return this.attr(attr, value)
    }
})