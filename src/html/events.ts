import { setDrop } from '../utils/drop'
import { getUpdates } from './globalVars'
import { Html } from './html'
import { defaultDispatcher, getNearestStore } from './state'
import { TARGET } from './symbols'

/**
 * Subscribe to an action. When `html().dispatch(key, data)` is called, all subscribers of `key` will have their registered `cb` function called.
 * 
 * @param {string | {[k: string]: any}} k string value of the Action to call OR an object keyed by Action keys each with a callback value
 * @param {(hx: Html, model: {[k: string]: any}) => Html} cb 
 * @returns 
 */
Html.prototype.subscribe = function(k, cb, spec = null) {
    const UPDATES = getUpdates()
    const { id } = spec || getNearestStore(this[TARGET]) || defaultDispatcher()

    if(typeof k === 'object') {
        let self = this
        Object.entries(k).forEach(([key, v]) => {
            self.subscribe(key, v)
        })
        return this
    }

    let cur = this[TARGET]
    
    const listener = data => cb(Html.from(cur), data)

    const drop = () => {
        UPDATES[id][k].splice(
            UPDATES[id][k].indexOf(listener), 1
        )
    }
    UPDATES[id]     ||= {}
    UPDATES[id][k]  ||= []
    UPDATES[id][k].push(listener)
    setDrop(cur, drop)

    return this
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
    function listener(e) {
        if(preventDefault) e.preventDefault()
        cb(Html.from(cur), e)
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
    const to = setTimeout(() => f(Html.from(self)), t)
    setDrop(self, () => clearTimeout(to))
    return this
}