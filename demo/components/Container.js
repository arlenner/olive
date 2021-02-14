import { html } from '../../src/index.js'

export const Container = (...content) =>
  html()
    .main().class('container').open()
      .each(content, (hx, cmp) => hx.concat(cmp))
