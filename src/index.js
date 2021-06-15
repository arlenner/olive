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

/** @type {HtmlConstructor} */
export const html               = _html
export const Html               = _Html
export const pipeMiddleware     = pipe
export const navigate           = _navigate
export const customDispatcher   = _customDispatcher
export const defaultDispatcher  = _defaultDispatcher


//DELETE THIS STUFF

//@ts-ignore
window.html = html
//@ts-ignore
window.Html = Html
//@ts-ignore
window.getStores = getStores
//@ts-ignore
window.getUpdates = getUpdates
//@ts-ignore
window.getNearestStore = getNearestStore

const SomeComponent = () => 
    html().button()

const App = () => 
    html()
        .div()
        .use(customDispatcher({
            id: '#1',
            model: {
                data: 'will this fuck it all up?'
            },
            reducer: (model, [k, data]) =>
                k === 'Test Action w Data' ? { ...model, data }
            :   /*else*/                      model
        }))
        .text('this is the app component')
        .concat(OtherComponent())
        .concat(OtherComponentTwo())

const OtherComponent = () =>
    html()
        .div()
        .text('I am another component')
        .nest()
            .div()  
            .text('My text will change when a [Test Action w Data] is dispatched.')
            .subscribe({
                'Test Action w Data': (hx, data) => hx.text(data)
            })
            .on('click', hx => hx.dispatch('Test Action w Data', 'this will likely fuck it all up!'))

const OtherComponentTwo = () =>
    html()
        .div()
        .text('I am component 2')
        .use(customDispatcher({
            id: '#2',
            model: {
                customData: ''
            },
            reducer: (model, [k, data]) =>
                k === 'Test Action w Data' ? { ...model, customData: data }
            :   /*else*/                     model
        }))
        .nest()
            .div()
            .text('This text should change when a [Test Action w Data] is dispatched.')
            .subscribe({
                'Test Action w Data': (hx, {customData}) => hx.text(`I did something with the data: ${customData}`)
            })

//@ts-ignore
window.App = App
//@ts-ignore
window.OtherComponent = OtherComponent
//@ts-ignore
window.OtherComponentTwo = OtherComponentTwo