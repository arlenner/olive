type ElementStrings = "a" | "abbr" | "acronym" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "bgsound" | "big" | "blink" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "command" | "content" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "element" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "image" | "img" | "input" | "ins" | "isindex" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "listing" | "main" | "mark" | "marquee" | "math" | "menu" | "menuitem" | "meta" | "meter" | "multicol" | "nav" | "nextid" | "nobr" | "noembed" | "noframes" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "pre" | "progress" | "q" | "rb" | "rbc" | "rp" | "rt" | "rtc" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "shadow" | "slot" | "small" | "source" | "spacer" | "span" | "strike" | "strong" | "sub" | "summary" | "sup" | "svg" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp"
type AttributeStrings = "acceptAttr" | "accesskeyAttr" | "actionAttr" | "altAttr" | "autocompleteAttr" | "autofocusAttr" | "autoplayAttr" | "checkedAttr" | "citeAttr" | "contenteditableAttr" | "controlsAttr" | "coordsAttr" | "datetimeAttr" | "dirAttr" | "disabledAttr" | "downloadAttr" | "draggableAttr" | "forAttr" | "formAttr" | "formactionAttr" | "hiddenAttr" | "hrefAttr" | "idAttr" | "labelAttr" | "maxlengthAttr" | "methodAttr" | "minAttr" | "multipleAttr" | "mutedAttr" | "nameAttr" | "novalidateAttr" | "patternAttr" | "placeholderAttr" | "posterAttr" | "preloadAttr" | "readonlyAttr" | "relAttr" | "requiredAttr" | "reversedAttr" | "selectedAttr" | "spellcheckAttr" | "srcAttr" | "stepAttr" | "tabindexAttr" | "titleAttr" | "typeAttr" | "valueAttr"

/**
 * 
 */
export interface HtmlCore {
    /**@private */
    e(tag: string): HtmlCursor

    /** Moves the cursor into a new nested context with no TARGET element. The next `HtmlElementFunction` will create a new context.*/
    nest(): HtmlCursor

    /** Moves the cursor out of the previous nested context. The TARGET element will be the parent of the preceding element(s). */
    denest(): HtmlCursor

    /** Selects an `HTMLElement`  from the document using the given `rootSelector`. If an element is found, replace that element with the calling component tree*/
    mount(rootSelector: string): void

    /** Return the root `HTMLElement` of this component tree. */
    root(): HTMLElement

    /** 
     * Attach an arbitrary `HtmlCursor` `tree` component tree to the current component tree as if it were a standard `HtmlElementFunction`
     * (like `.div()` or `.section()`) 
     * 
     */
    concat(tree: HtmlCursor): HtmlCursor

    /**
     * Sets the text content of the TARGET element to `t`. If called with no parameter, returns the text content of the TARGET element.
     * @param t 
     */
    text(t: string): HtmlCursor

    /**
     * Adds css styles (use camelCase names) to the TARGET element.
     * @param styles 
     */
    css(styles: {[K: string]: string}): HtmlCursor

    /**
     * Add one or more CSS classes to the TARGET element's classList.
     * @param name 
     */
    class(name: string): HtmlCursor

    /**
     * Remove one or more CSS classes from the TARGET element's classList.
     * @param name 
     */
    removeClass(name: string): HtmlCursor

    /**
     * Accepts an object keyed by arbitrary strings and populated with functions that take an `HtmlCursor` `hx` and an `T` `data`,
     * both optional. 
     * @param subs 
     */
    subscribe<T>(subs: { [k: string]: (hx?: HtmlCursor, data?: T) => void }): HtmlCursor

    /**
     * Dispatch updates to the current `HtmlCursor` component tree. If called globally via `html().dispatch`, this will update
     * all registered `Dispatcher`s.
     * @param k string key to register to this callback
     * @param data data to send
     * @param bubbles should this dispatch get caught 
     */
    dispatch(k: string, data?: unknown, bubbles?: boolean): void

    /**
     * Registers a callback to the corresponding event handler for the current TARGET element. The callback may optionally use
     * an `HtmlCursor` to the current TARGET element, and an `Event` `e`, so that we can use event data as well.
     * @param k 
     * @param cb 
     */
    on(k: string, cb: (hx?: HtmlCursor, e?: Event) => void): HtmlCursor

    /**
     * Registers a map `T` of routes, keyed by the route string selector and populated by functions that return `HtmlCursor`s.
     * @param opts 
     */
    router<T extends {}>(opts: T): HtmlCursor

    /** Uses a mutation observer to determine if an element is within the frame of the viewport, calling `fn` when true. */
    onIntersect<T extends {}>(fn:(hx: HtmlCursor, entry: T) => void, opts): HtmlCursor

    /**
     * A simple repeater that do simply repeats an element based on the passed constructor function `fn`.
     * It optionally may utilize its index `i` in the constructor callback.
     * @param n number of repetitions
     * @param fn the `HtmlCursor` function to repeat
     */
    range(n: number, fn: (hx: HtmlCursor, i?: number) => HtmlCursor): HtmlCursor

    /**
     * A repeater function that maps data from `arr` to `HtmlCursor` component trees, then concats them into the current cursor's context.
     * @param arr the array of data to map
     * @param fn the function used to map the data `t`
     */
    each<T>(arr: T[], fn: (hx: HtmlCursor, t: T, i?: number) => HtmlCursor): HtmlCursor;

    /** add attr `k` with value `v` to this TARGET element. */
    attr(k: string, v: any): HtmlCursor

    /** Remove an HTML Attribute from the current TARGET element. */
    removeAttr(k: string): HtmlCursor

    /** Replace the current TARGET element with elements corresponding to the given `HtmlCursor` component tree. */
    replaceWith(tree: HtmlCursor): HtmlCursor

    mapSelector(sel: string, fn: (hx: HtmlCursor, i?: number) => HtmlCursor): HtmlCursor

    /** return the current TARGET element as a raw `HTMLElement` node */
    getTarget(): HTMLElement

    /** Call an arbitrary function, optionally utilizing an `HtmlCursor` to the current TARGET element, without disturbing the flow of the current `HtmlCursor` component tree. */
    tap(f: (hx: HtmlCursor) => void): HtmlCursor

    /**
     * Calls an arbitrary callback function after `t` milliseconds, optionally using an `HtmlCursor` to the current TARGET element.
     * @param t time in ms before the callback fires
     * @param f the callback function to fire
     */
    timer(t: number, f: (hx?: HtmlCursor) => void): HtmlCursor

    /** Inserts elements corresponding to the given `HtmlCursor` `tree` before the current TARGET element. */
    insertBefore(tree: HtmlCursor): HtmlCursor

    /** Remove the TARGET element from the current `HtmlCursor` tree. The new TARGET will be the previous sibling or null.*/
    remove(): HtmlCursor

    from(target: HTMLElement): HtmlCursor

    /**
     * Sets the local Dispatcher. When using a scoped `dispatch` (one called from any `HtmlCursor` function's callback), only the nearest
     * local dispatcher will be affected. If using a global dispatch (one called via `html().dispatch(...)`), all dispatchers will catch the action.
     * @param dispatcher the dispatcher to use.
     */
    use<T>(dispatcher: Dispatcher<T>): HtmlCursor
}

/**
 * Function that returns an `HtmlCursor`.
 */
export type HtmlElementFunction = () => HtmlCursor

/**
 * 
 */
export type HtmlElementFunctions = {    
    [k in ElementStrings]: HtmlElementFunction
}

export type HtmlAttributeFunctions = {
    [k in AttributeStrings]: (value?: unknown) => HtmlCursor
}

/**
 * Core of the Olive SPA package. Calling `html()` creates a new cursor context that doesn't point to any element.
 * From there you can move the cursor by calling a new `HtmlElementFunction`, or add properties to the cursor's TARGET
 * element following the basic HTMLElement interface with many custom extensions.
 */
export type HtmlCursor = HtmlCore & HtmlElementFunctions & HtmlAttributeFunctions

export type SubscriberA = (k: string, cb: (hx?: HtmlCursor, e?: EventTarget) => void) => HtmlCursor
export type SubscriberB = (subs: { [k: string]: (hx?: HtmlCursor, e?: EventTarget) => void }) => HtmlCursor
export type Subscriber = SubscriberA | SubscriberB

export type OliveComponent<T> = (model?: T) => HtmlCursor

export type Action<T> = [k: string, data: T]

export type Reducer<T extends {}, A> = (model: T, action: Action<A>) => T

export type HtmlConstructor = (p?: HTMLElement) => HtmlCursor

export type Dispatcher<T> = {
    id: string
    state: () => T
    dispatch: (k: string, data: unknown) => void
}

