# olive 🍸
## A vanillaJS based declarative DOM API.
*This is still a WIP, I'm developing a showcase website and I add features as necessary. Expect radical/breaking changes to the API until I create an actual release version. I'll let you know when you should actually use it!*

olive uses a wrapper around native DOM functions to provide a consistent and declarative API. olive is tiny. It currently sits around 300 LOC. It's essentially native DOM except the wrapper object keeps track of it's targets, allowing us to chain dot-operator functions to declare our html structure, attributes, events, and reactive updates. And it's all powered by vanillaJS and a tiny wrapper.

## Declaring a Component
```javascript
//declare a component as a simple function. This produces a single empty main element.
const myComponent = () => 
  html().main()
  
//there's nothing stopping you from defining a static component, notice it's not a function.
//this will be in memory indefinitely, but it will always refer to the same DOM object.
const myStaticComponent = 
  html().div()

```

## Declare Components Using Fluent API Syntax
olive was designed to use a fluent API everywhere that HTML would be expected. It allows us to use any element name as a dot operator function, and most attributes as extensions. Plus bunches other helper functions too, like css for example:

```javascript
//we can use any element and most attributes via dot operator:
const square = (size, color) => 
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

const dataConsumer = () =>
  html().each(myData, (html, {name}) => html.h1().text(name))
You could also use repeat:

const dataless = () => html().repeat(3, html => html.h1().text('hello!'))
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
const anotherComp = () => 
  html()
    .main().open()          //<- current target is the main element, open() nests next elems
      .article().open()     //<- current target is the article element
        .h1().text(myTitle) //<- current target is the h1 elem
                            // We can omit close() because concat(tree) concatenates based on root elements.
```
## Precise Reactivity
olive can handle reactivity too, and with pinpoint accuracy. olive will only run updates on the specific target elements subscribe is called upon

```javascript
//we can make any target element reactive by using the .update() function

let selected = false  //<- some state

const toggleButton = () => 
  html()
    .button().text("Click Me.")
      .on('click', () => {                  //.on() registers an event listener on our component         
        selected = !selected                //we can manipulate our state
        send('ToggleColor', selected)       //use send() to trigger any component with the ToggleColor update to fire
      })
      .subscribe({                          //when send() occurs, this logic will be run on our target element
        ToggleColor: (html, data) =>        //this particular update will cause the color to change to indicate that you've toggled something.
          html.css({ color: selected ? 'red' : '' })
      })
```

## Composition-Forward by Design
We can use olive's concat method to compose our components:

```javascript
//connect your components together arbitrarily
const app = () =>
  html()
    .concat(square(100, 'red'))
    .concat(toggleButton())
```

## Routing Support
olive supports history-API based routing.

```javascript
const HOME     = '/home',
      CONTACT  = '/contact',
      ABOUT    = '/about',
      PROJECTS = '/projects'
      
const home = () => 
  html()...
  
const contact = () => 
  html()...
  
const about = () => 
  html()...
  
const projects = () => 
  html()...
      
const app = () => 
  html()
    .router({
      '/':         home,
      [HOME]:      home,
      [CONTACT]:   contact,
      [ABOUT]:     about,
      [PROJECTS]:  projects,
    })
```