import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './containers/Layout'
import './style.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
