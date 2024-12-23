import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import TrendingVideoItem from '../TrendingVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingRoute,
  ResponsiveContainer,
  TrendingContainer,
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstands.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  dataFormatted = data => ({
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstands.inprogress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideosList: newVideos,
        apiStatus: apiStatusConstands.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstands.failure})
    }
  }

  renderFailureView = () => {
    const clickFailureViewRetrybtn = () => this.getTrendingVideos()
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
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderContainer>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </div>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <LogoWithTextContainer data-testid="banner" darkColor={darkTheme}>
                <LogoBackground darkColor={darkTheme}>
                  <HiFire size="40" color="#ff0000" />
                </LogoBackground>
                <Heading darkColor={darkTheme}>Trending</Heading>
              </LogoWithTextContainer>
              <VideosContainer>
                {trendingVideosList.map(item => (
                  <TrendingVideoItem key={item.id} videoItem={item} />
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
          if (activeSide !== 'TRENDING') {
            changeActiveSide('TRENDING')
          }

          return (
            <TrendingRoute data-testid="trending" darkTheme={darkTheme}>
              <Headers />
              <ResponsiveContainer>
                <Sidebar />
                <TrendingContainer darkTheme={darkTheme}>
                  {this.renderViews()}
                </TrendingContainer>
              </ResponsiveContainer>
            </TrendingRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
