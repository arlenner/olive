# olive 🍸
## A vanillaJS based declarative DOM API.
_OliveJS is finally released! You can install it as an npm package:_
```
> npm i olive-spa
```

OliveJS is a lightweight vanilla SPA framework. Docs still a WIP. 

## Declaring a Component
```javascript
import { html } from 'olive-spa'

//declare a component as a simple function. This produces a single empty main element.
const MyComponent = () => 
  html().main()
  
//there's nothing stopping you from defining a static component, notice it's not a function.
//this will be in memory indefinitely, but it will always refer to the same DOM object.
const MyStaticComponent = 
  html().div()

```

## Declare Components Using Fluent API Syntax
olive was designed to use a fluent API everywhere that HTML would be expected. It allows us to use any element name as a dot operator function, and most attributes as extensions. Plus bunches other helper functions too, like css for example:

```javascript
//we can use any element and most attributes via dot operator:
const Square = (size, color) => 
  html().div().css({
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: `${color}`
  })
```
## Map to Elements
Like other front-end libraries, olive has an element repeater function.

```javascript

const myData = [ {name: 'Ross'}, {name: 'Kay'} ]

const DataConsumer = () =>
  html().each(myData, (hx, {name}) => hx.h1().text(name))

//You could also use repeat:

const SimpleRepeater = () => 
  html().repeat(3, hx => hx.h1().text('hello!'))
/*
<h1>hello!</h1>
<h1>hello!</h1>
<h1>hello!</h1>
*/

```
## Prevent Unecessary Re-Renders with Procedural Target Tracking
olive keeps track of its target elements procedurally. That means until you declare another element, all of the extensions you apply will affect only the current target. This allows us to keep chaining extension methods until we want to declare a new element. We also have control over nesting using the open and close functions. close can typically be omitted unless you want to have multiple nested trees.
```javascript
//olive procedurally tracks the target dom element upon construction
//this component doesn't update, so it will never re-render any of it's parts unless replaced by parent updates.
const AnotherComp = () => 
  html()
    .main().open()          //<- current target is the main element, open() nests next elems
      .article().open()     //<- current target is the article element
        .h1().text(myTitle) //<- current target is the h1 elem
                            // We can omit close() because concat(tree) concatenates based on root elements.
```
## Precise Reactivity
olive can handle reactivity too, and with pinpoint accuracy. olive will only run updates on the specific target elements subscribe is called upon

```javascript
//we can make any target element reactive by using the `.subscribe()` function combined with a state store.
import { html, makeStore } from 'olive-spa'

//ACTIONS
const CHANGE_COLOR = 'Change Color'
//ACTION CTORS
const ChangeColor = (color) => [CHANGE_COLOR, color]

//REDUCERS
const rxChangeColor = (model, data) => ({
  ...model,
  color: data
})

const rx = (model, [k, data]) =>
  k === CHANGE_COLOR ? rxChangeColor(model, data)
: /*else*/             model

//MODEL
const model = {
  color: 'black'
}

//STORE
const store = makeStore(model, rx)


//APPLICATION
const App = () =>
  html()
    .use(store)
    .concat(ToggleButton())

const ChangeButton = () => 
  html()
    .button().text("Click Me.")
      .on('click', hx => hx.dispatch(ChangeColor('red')))
      .subscribe({ //model is passed as second param to subscriptions                
        [CHANGE_COLOR]: (html, {color}) =>
          html.css({ color })
      })
```

## Composition-Forward by Design
We can use olive's concat method to compose our components:

```javascript
//connect your components together arbitrarily
const App = () =>
  html()
    .concat(Square(100, 'blue'))
    .concat(ChangeButton())
```

## Routing Support
olive supports history-API based routing.

```javascript
import { navigate } from 'olive-spa'

const HOME     = '/home',
      CONTACT  = '/contact',
      ABOUT    = '/about',
      PROJECTS = '/projects'
      
const Home = () => 
  html()...
  
const Contact = () => 
  html()...
  
const About = () => 
  html()...
  
const Projects = () => 
  html()...
      
const app = () => 
  html()
    .router({
      '/':         Home,
      [HOME]:      Home,
      [CONTACT]:   Contact,
      [ABOUT]:     About,
      [PROJECTS]:  Projects,
    })

navigate(HOME, /*...args*/) //=> replace router outlet w component registered to HOME
```
