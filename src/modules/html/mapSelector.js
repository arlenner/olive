import { Html } from "./html"


HTMLCollection.prototype.forEach = function(f) {
    for(let i = 0; i < this.length; i++)
      f(this[i], i)
}
  
Html.prototype.mapSelector = function(sel, fn) {
    document.querySelectorAll(sel).forEach((x, i) => fn(Html.from(x), i))
    return this
}