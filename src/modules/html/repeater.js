import { Html } from "./html"


Html.prototype.range = function(n, f) {
    for(let i = 0; i < n; i++) {
        f(this, i)
    }
    return this
}
  
Html.prototype.each = function(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        fn(this, arr[i], i)
    }
    return this
}