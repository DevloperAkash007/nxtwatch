import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  activeSide: '',
  changeActiveSide: () => {},
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
