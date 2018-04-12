// src/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const yellow       = '#ff0d31'
export const green        = '#00AA86'
export const betterGeen   = '#417505'
export const red          = '#BB5A5A'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#292b0f'
export const darkGrey     = '#757575'
export const grey         = '#F2E9D0'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: yellow,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
