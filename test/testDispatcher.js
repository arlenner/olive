import { customDispatcher, pipeMiddleware } from "./dist";
import { html } from "./dist/html/html";

const fxLogger = (model, action) => {
    console.log(`test dispatcher got action ${action[0]}${action[1] ? `with data ${JSON.stringify(action[1], null, 2)}` : ''}`)
}

const fxFetcher = (model, action) => {
    const [k, data] = action
    if(k === 'fetch data') {
        let json = fetch('picsum.photos/500')
            .then(res => res.json())

        console.log(json)
        html().dispatch('fetch data success', json)
    } else {
        html().dispatch('fetch data failed')
    }
    
    return action
}

const reducer = (model, [k, data]) => 
    k === 'fetch data success'  ? {...model, locked: false, path: 'success!' }
:   k === 'fetch data failed'   ? { ...model, locked: true, path: 'error!' }
:                                 model

const mw = pipeMiddleware(fxLogger, fxFetcher)

export const TestDispatcher = customDispatcher({
    id: 'test dispatcher',
    model: {
        path: '/',
        locked: true
    },
    mw,
    reducer
})

