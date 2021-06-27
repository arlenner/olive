import { customDispatcher, html } from './dist/index'

const App = () => 
    html()
        .div()
        .text('Hello from div 1')
        .subscribe({
            'hello event': (hx, data) => hx.text(data)
        })
        .use(customDispatcher({
            id: 'div1 dispatcher',
            model: {
                someValue: 'this is a value',
            },
            mw: (model, action) =>  (console.log(`the div1 dispatcher caught it: ${JSON.stringify(action, null, 2)}, ${JSON.stringify(model, null, 2)}`), action),
            reducer: (model, [k, data]) => 
                k === 'hello event' ? { ...model, someValue: data }
            :   /**else */            model
        }))
        .nest()
            .concat(Component())

const Component = () =>
    html()
        .input()
        .placeholderAttr('Hey put some text here')
        .on('input', hx => hx.dispatch('some other event'))

        .button()
        .text('touch me')
        .on('click', hx => hx.dispatch('hello event', 'new data'))



App().mount('root')