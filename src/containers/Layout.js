import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import DividerContainer from './DividerContainer'
import StopOversListContainer from './StopOversListContainer'
import SearchContainer from './SearchContainer'

const Layout = () => (
  <MuiThemeProvider>
    <Paper className='standard-spacing' zDepth={1} rounded={false}>
      <StopOversListContainer />
      <DividerContainer />
      <SearchContainer />
    </Paper>
  </MuiThemeProvider>
)

export default Layout
