import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import StopOversList from '../components/StopOversList';
import Search from '../components/Search';

const stopOvers = [
  { label: 'London Gatwick Airport, Horley, United Kingdom' },
  { label: 'St Augustine Parade, Bristol BS1 4UZ, United Kingdom' },
  { label: 'Porth Teigr, Discovery Quay, Cardiff CF10 4GA, United Kingdom' }
]

const Layout = () => (
  <MuiThemeProvider>
    <div>
      <Paper className='standard-spacing' zDepth={1} rounded={false}>
        <StopOversList items={stopOvers} />
        <Divider />
        <Search />
      </Paper>
    </div>
  </MuiThemeProvider>
);

export default Layout
