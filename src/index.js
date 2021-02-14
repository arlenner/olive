import { html as _html, navigate as _navigate } from './modules/html'
import { tinyStore, pipe } from './modules/tinyStore'

export const html = _html
export const makeStore = tinyStore
export const pipeMiddleware = pipe
export const navigate = _navigate
