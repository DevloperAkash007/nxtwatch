import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

const sides = [
  {id: 'HOME', name: 'Home'},
  {id: 'TRENDING', name: 'Trending'},
  {id: 'GAMING', name: 'Gaming'},
  {id: 'SAVED-VIDEOS', name: 'Saved Videos'},
]

class App extends Component {
  state = {
    darkTheme: false,
    activeSide: sides[0].id,
    savedVideosList: [],
  }

  addSavedVideo = videoItem => {
    const {savedVideosList} = this.state
    const isPresent = savedVideosList.find(each => each.id === videoItem.id)

    if (isPresent === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }))
    }
  }

  removeSavedVideo = id => {
    const {savedVideosList} = this.state
    if (savedVideosList.length !== 0) {
      const filteredSavedVideosList = savedVideosList.filter(
        item => item.id !== id,
      )
      this.setState({
        savedVideosList: filteredSavedVideosList,
      })
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  changeActiveSide = activeSide => {
    this.setState({
      activeSide,
    })
  }

  render() {
    const {darkTheme, activeSide, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          activeSide,
          changeActiveSide: this.changeActiveSide,
          savedVideosList,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
