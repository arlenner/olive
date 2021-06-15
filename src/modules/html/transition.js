import { Html } from './html'

export const TRANS_STYLES = {
    hidden        : ()    => ({ opacity: 0 }),
    flyStyle      : ()    => ({}),
    fadeStyle     : ()    => ({ opacity: 0 }),
    clearStyle    : ()    => ({ opacity: '', transform: '' }),
    centerStyle   : ()    => ({}),
    leftStyle     : amt   => ({ transform: `translateX(-${amt}px)` }),
    rightStyle    : amt   => ({ transform: `translateX(${amt}px)` }),
    bottomStyle   : amt   => ({ transform: `translateY(${amt}px)` }),
    topStyle      : amt   => ({ transform: `translateY(-${amt}px)` }),
    wiggleStyle   : amt   => ({ transform: `rotateZ(${amt}deg)` }),
}
  
export const bez = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`
export const getTransStr = (x, n, curve) => `${x} ${n}s ${bez(curve)}`

export const transition = (config = {}) => {
    const { direction, type, time, delay, curve, velocity, baseTransition } = config
    let b = baseTransition === '' ? '' : baseTransition + ','
    
    let style = { 
        transition: b + getTransStr('transform', time, curve)+','+getTransStr('opacity', time, curve),
        transitionDelay: delay+'s',
        ...TRANS_STYLES[direction+'Style'](velocity), 
        ...TRANS_STYLES[type+'Style'](),
    }
    const clear = html => {
        return html.css(TRANS_STYLES.clearStyle())
    }
  
    const addStyle = html => {
        return html.css(style)
    }
    
    return (html, entry) => 
        entry.isIntersecting 
            ? (clear(html))
            : (addStyle(html)) 
}

