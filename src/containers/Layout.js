import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import StepsContainer from './StepsContainer'
import SearchContainer from './SearchContainer'
import MapContainer from './MapContainer'
import EtaContainer from './EtaContainer'
import DepartureTimeContainer from './DepartureTimeContainer'
import TimePickerContainer from './TimePickerContainer'

const Layout = () => (
  <MuiThemeProvider>
    <div>
      <Drawer className='standard-spacing control-panel' width={400}>
        <div className='standard-spacing'>
          <DepartureTimeContainer />
          <TimePickerContainer />
        </div>
        <StepsContainer />
        <div className='standard-spacing'>
          <SearchContainer />
        </div>
        <div className='standard-spacing'>
          <EtaContainer />
        </div>
      </Drawer>
      <MapContainer />
    </div>
  </MuiThemeProvider>
)

export default Layout
