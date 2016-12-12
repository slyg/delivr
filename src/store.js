import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import middleware from './middleware'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))

export default store
