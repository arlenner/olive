import { setDrop } from '../utils/drop'
import { getStores, getUpdates } from './globalVars'
import { Html } from './html'
import { defaultDispatcher } from './state'
import { DISPATCHER_ID, NO_REDUCER, TARGET } from './symbols'

/**
 * Subscribe to an action. When `html().dispatch(key, data)` is called, all subscribers of `key` will have their registered `cb` function called.
 * 
 * @param {string | {[k: string]: any}} k string value of the Action to call OR an object keyed by Action keys each with a callback value
 * @param {(hx: Html, model: {[k: string]: any}) => Html} cb 
 * @returns 
 */
Html.prototype.subscribe = function(k, cb) {
    const UPDATES = getUpdates()

    if(typeof k === 'object') {
        let self = this
        Object.entries(k).forEach(([key, v]) => {
            self.subscribe(key, v)
        })
        return this
    }
    let cur = this[TARGET]    
    const hx = this.injectDispatcher()

    const listener = data => cb(hx, data)

    const drop = () => {
        UPDATES[k].splice(
            UPDATES[k].indexOf(listener), 1
        )
    }

    UPDATES[k]  ||= []
    UPDATES[k].push(listener)
    setDrop(cur, drop)

    return this
}

Html.prototype.injectDispatcher = function() {
    const UPDATES = getUpdates()
    const STORES = getStores()

    let cur = this[TARGET]
    let disp_id = this[TARGET][DISPATCHER_ID] || defaultDispatcher().id

    const hx = Html.from(cur)

    //return early here
    if(disp_id === defaultDispatcher().id) return hx
    
    //else set overridden dispatch function with injected dispatcher
    hx.dispatch = (k, data) => {
        const dispatcher = STORES[disp_id]    
        const { dispatch, state, [NO_REDUCER]: noReducer } = dispatcher
    
        dispatch([k, data])
        
        if(UPDATES[k]) {
            const passData = noReducer ? data : state()
            UPDATES[k].forEach(f => f(passData))
        }
    }

    return hx
}

/**
 * @typedef {"search" | "appinstalled" | "beforeinstallprompt" | "beforexrselect" | "abort" | "blur" | "cancel" | "canplay" | "canplaythrough" | "change" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "formdata" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "webkitanimationend" | "webkitanimationiteration" | "webkitanimationstart" | "webkittransitionend" | "wheel" | "auxclick" | "gotpointercapture" | "lostpointercapture" | "pointerdown" | "pointermove" | "pointerup" | "pointercancel" | "pointerover" | "pointerout" | "pointerenter" | "pointerleave" | "selectstart" | "selectionchange" | "animationend" | "animationiteration" | "animationstart" | "transitionrun" | "transitionstart" | "transitionend" | "transitioncancel" | "afterprint" | "beforeprint" | "beforeunload" | "hashchange" | "languagechange" | "message" | "messageerror" | "offline" | "online" | "pagehide" | "pageshow" | "popstate" | "rejectionhandled" | "storage" | "unhandledrejection" | "unload" | "devicemotion" | "deviceorientation" | "deviceorientationabsolute" | "pointerrawupdate"} EventName
 */

/**
 * Registers a listener to the `TARGET` element of this Html wrapper-object.
 * 
 * @param {EventName} k 
 * @param {(hx: Html, e: Event) => void} cb The function to call when the event is triggered 
 * @param {boolean} preventDefault  
 * @returns 
 */
Html.prototype.on = function(k, cb, preventDefault = true) {

    let cur = this[TARGET]

    const hx = this.injectDispatcher()    
    
    function listener(e) {
        if(preventDefault) e.preventDefault()
        cb(hx, e)
    }
    
    const drop = () => 
        cur.removeEventListener(k, listener)
  
    setDrop(cur, drop)
  
    cur.addEventListener(k, listener)
    return this
}

/**
 * Calls an arbitrary function in `t` milliseconds, using the `TARGET` element as a parameter for the callback `f`.
 * 
 * @param {number} t Milliseconds until `f` is called. 
 * @param {(hx: Html) => void} f The callback function to be called after `t` milliseconds.
 * @returns 
 */
Html.prototype.timer = function(t, f) {
    const self = this[TARGET]

    const hx = this.injectDispatcher()

    const to = setTimeout(() => f(hx, t))
    setDrop(self, () => clearTimeout(to))
    return this
}