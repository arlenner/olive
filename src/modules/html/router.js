import { getRouter } from "./globalVars"
import { html, Html } from "./html"

Html.prototype.router = function(opts) {
    const ROUTER = getRouter()
    this.concat(
        html().div().idAttr('olive-router').nest().div()
    )
  
    Object.entries(opts).forEach(([k, f]) => {
        ROUTER[k] = f
    })
  
    return this
}

export const navigate = (route, ...args) => {
    const ROUTER = getRouter()
    if(window.location === window.location.origin + route) return
    window.history.pushState(
        {}, 
        route, 
        window.location.origin + route
    )
    Html.from(document.querySelector('#olive-router').firstElementChild).replace(ROUTER[route](...args))
} 