import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import StepsContainer from './StepsContainer'
import SearchContainer from './SearchContainer'
import MapContainer from './MapContainer'

const Layout = () => (
  <MuiThemeProvider>
    <div>
      <Drawer className='standard-spacing control-panel' width={400}>
        <StepsContainer />
        <div className='standard-spacing'>
          <SearchContainer />
        </div>
      </Drawer>
      <MapContainer />
    </div>
  </MuiThemeProvider>
)

export default Layout
