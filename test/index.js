import { customDispatcher, html } from './dist/index'
import { TestDispatcher } from './testDispatcher'

const randomDispatcher = customDispatcher({
    id: 'div1 dispatcher',
    model: {
        someValue: 'this is a value',
    },
    mw: (model, action) =>  (console.log(`the div1 dispatcher caught it: ${JSON.stringify(action, null, 2)}, ${JSON.stringify(model, null, 2)}`), action),
    reducer: (model, [k, data]) => 
        k === 'hello event'         ? { ...model, someValue: data }
    :   k === 'some other event'    ? { ...model, someValue: data }
    :   /**else */                    model
})

const App = () => 
    html()
        .h1()
        .text('Hello from div 1')
        .use(randomDispatcher, TestDispatcher)
        .subscribe({
            'hello event': (hx, {someValue}) => hx.text(someValue),
            'some other event': (hx, {someValue}) => {
                hx.text(someValue)
            }
        })
        .concat(Component())

const Component = () =>
    html()
        .input()
        .use(randomDispatcher)
        .placeholderAttr('Hey put some text here')
        .on('input', hx => {
            hx.dispatch('some other event', hx.valueAttr())
        })

        .button()
        .use(randomDispatcher)
        .text('touch me')
        .on('click', hx => hx.dispatch('hello event', 'new data'))


// window.App = App

App().mount('root')