// src/App.js
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import PropTypes from 'prop-types'
//container
import Main from './containers/Main'

//styling
import './App.css'


class App extends Component {
  static childContextTypes = {
   muiTheme: PropTypes.object.isRequired,
 }

  getChildContext() {
   return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App
