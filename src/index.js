import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './containers/Layout'
import { Provider } from 'react-redux'
import store from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './style.css'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)
