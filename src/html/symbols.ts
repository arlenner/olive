/**
 * Global PARENT symbol for the parent element of an HtmlWrapper context.
 * @name ParentSymbol
 * @type {symbol} 
 */
export const PARENT    = Symbol.for('parent-elem')
             
/**
 * Global TARGET symbol for the target element of an HtmlWrapper context.
 * @name TargetSymbol
 * @type {symbol}
 */
export const TARGET    = Symbol.for('target-elem')

/**
 * Global NO_REDUER symbol. Used in the dispatcher module to determine whether to send stored state or event data to listeners.
 * @name NoReducerSymbol
 * @type {symbol}
 */
export const NO_REDUCER = Symbol.for('no-reducer')

/**
 * Global DISPATCHER_ID symbol. 
 * @name dispatcherId
 * @type {symbol}
 */
export const DISPATCHER_ID = Symbol.for('dispatcher-id')