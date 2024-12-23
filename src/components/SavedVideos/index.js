import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosRoute,
  ResponsiveContainer,
  SavedVideosContainer,
  NoSavedVideoContainer,
  NoSavedVideoImage,
  NoSavedVideoHeading,
  NoSavedVideoText,
  LogoWithTextContainer,
  LogoBackground,
  Heading,
  VideosContainer,
} from './StyledComponents'

class SavedVideos extends Component {
  noSavedVideosView = () => {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <NoSavedVideoContainer>
              <NoSavedVideoImage
                alt="no saved videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              />
              <NoSavedVideoHeading darkColor={darkTheme}>
                No saved videos found
              </NoSavedVideoHeading>
              <NoSavedVideoText darkColor={darkTheme}>
                You can save your videos while watching them
              </NoSavedVideoText>
            </NoSavedVideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderViews = () => {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideosList, darkTheme} = value

          if (savedVideosList.length === 0) {
            return this.noSavedVideosView()
          }
          return (
            <>
              <LogoWithTextContainer data-testid="banner" darkColor={darkTheme}>
                <LogoBackground darkColor={darkTheme}>
                  <HiFire size="40" color="#ff0000" />
                </LogoBackground>
                <Heading darkColor={darkTheme}>Saved Videos</Heading>
              </LogoWithTextContainer>
              <VideosContainer>
                {savedVideosList.map(item => (
                  <SavedVideoItem key={item.id} videoItem={item} />
                ))}
              </VideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, activeSide, changeActiveSide} = value
          if (activeSide !== 'SAVED-VIDEOS') {
            changeActiveSide('SAVED-VIDEOS')
          }
          return (
            <SavedVideosRoute darkColor={darkTheme}>
              <Headers />
              <ResponsiveContainer>
                <Sidebar />
                <SavedVideosContainer
                  data-testid="savedVideos"
                  darkColor={darkTheme}
                >
                  {this.renderViews()}
                </SavedVideosContainer>
              </ResponsiveContainer>
            </SavedVideosRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
