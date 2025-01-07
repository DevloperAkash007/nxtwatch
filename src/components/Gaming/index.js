import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingRoute,
  ResponsiveContainer,
  GamingContainer,
  FailureContainer,
  LoaderContainer,
  FailureImage,
  VideosContainer,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryBtn,
  LogoWithTextContainer,
  LogoBackground,
  Heading,
} from './StyledComponents'

const apiStatusConstands = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstands.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  dataFormatted = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstands.inprogress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const newVideos = videos.map(item => this.dataFormatted(item))
      this.setState({
        gamingVideosList: newVideos,
        apiStatus: apiStatusConstands.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstands.failure})
    }
  }

  renderFailureView = () => {
    const clickFailureViewRetrybtn = () => this.getGamingVideos()
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <FailureContainer>
              <FailureImage
                alt="failure view"
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
              />
              <FailureViewHeading darkColor={darkTheme}>
                Oops! Something Went Wrong!
              </FailureViewHeading>
              <FailureViewText darkColor={darkTheme}>
                We are having some trouble to complete your request.
                <br />
                Please try again.
              </FailureViewText>
              <FailureViewRetryBtn
                type="button"
                onClick={clickFailureViewRetrybtn}
              >
                Retry
              </FailureViewRetryBtn>
            </FailureContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <LogoWithTextContainer data-testid="banner" darkColor={darkTheme}>
                <LogoBackground darkColor={darkTheme}>
                  <SiYoutubegaming size="40" color="#ff0000" />
                </LogoBackground>
                <Heading darkColor={darkTheme}>Trending</Heading>
              </LogoWithTextContainer>
              <VideosContainer>
                {gamingVideosList.map(item => (
                  <GamingVideoItem key={item.id} videoItem={item} />
                ))}
              </VideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstands.inprogress:
        return this.renderLoader()
      case apiStatusConstands.success:
        return this.renderSuccessView()
      case apiStatusConstands.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, activeSide, changeActiveSide} = value
          if (activeSide !== 'GAMING') {
            changeActiveSide('GAMING')
          }

          return (
            <GamingRoute data-testid="gaming" darkTheme={darkTheme}>
              <Headers />
              <ResponsiveContainer>
                <Sidebar />
                <GamingContainer darkTheme={darkTheme}>
                  {this.renderViews()}
                </GamingContainer>
              </ResponsiveContainer>
            </GamingRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
