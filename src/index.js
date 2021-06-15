import './modules/html/attr'
import './modules/html/class'
import './modules/html/concat'
import './modules/html/css'
import './modules/html/e'
import './modules/html/events'
import './modules/html/htmlInterface'
import './modules/html/mapSelector'
import './modules/html/onIntersect'
import './modules/html/repeater'
import './modules/html/root'
import './modules/html/transition'
import { HtmlConstructor, HtmlCursor, Dispatcher, HtmlCore } from './modules/html/types'

import { 
    defaultDispatcher as _defaultDispatcher, 
    customDispatcher as _customDispatcher,
    getNearestStore
}                                               from './modules/html/state'
import { navigate as _navigate }                from './modules/html/router'
import { html as _html, Html as _Html}          from './modules/html/html'
import { pipe }                                 from './modules/tinyStore'
import { getStores, getUpdates }                from './modules/html/globalVars'

export const html               = _html
export const Html               = _Html
export const pipeMiddleware     = pipe
export const navigate           = _navigate
export const customDispatcher   = _customDispatcher
export const defaultDispatcher  = _defaultDispatcher