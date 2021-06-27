import './html/attr'
import './html/class'
import './html/concat'
import './html/css'
import './html/e'
import './html/events'
import './html/htmlInterface'
import './html/mapSelector'
import './html/onIntersect'
import './html/repeater'
import './html/root'
import './html/transition'
import { HtmlConstructor, HtmlCursor, Dispatcher, HtmlCore } from './html/types'

import { 
    defaultDispatcher as _defaultDispatcher, 
    customDispatcher as _customDispatcher,
    getNearestStore
}                                               from './html/state'
import { navigate as _navigate }                from './html/router'
import { html as _html, Html as _Html}          from './html/html'
import { pipe }                                 from './tinyStore'
import { getStores, getUpdates }                from './html/globalVars'

export const html               = _html
export const Html               = _Html
export const pipeMiddleware     = pipe
export const navigate           = _navigate
export const customDispatcher   = _customDispatcher
export const defaultDispatcher  = _defaultDispatcher
