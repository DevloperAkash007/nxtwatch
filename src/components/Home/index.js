import {Component} from 'react'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'

import {
  HomeRoute,
  ResponsiveContainer,
  HomeContainer,
  LoaderContainer,
  BannerSection,
  BsLogoContainer,
  BsLogo,
  BsCloseBtn,
  BsPara,
  GetItNowBtn,
  InputContainer,
  InputItem,
  Input,
  SearchButton,
  VideosContainer,
  NoSearchResultContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchText,
  NoSearchRetryBtn,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryBtn,
} from './StyledComponents'

const apiStatusConstands = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

const lightLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstands.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
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

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstands.inprogress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: newVideos,
        apiStatus: apiStatusConstands.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstands.failure,
      })
    }
  }

  renderInput = () => {
    const {searchInput} = this.state
    const onChangeSearchInput = event =>
      this.setState({searchInput: event.target.value})

    const fetchSearchData = () => {
      this.getVideos()
    }
    return (
      <InputContainer>
        <InputItem>
          <Input
            type="search"
            onChange={onChangeSearchInput}
            value={searchInput}
            placeholder="Search"
          />
          <SearchButton
            data-testid="searchButton"
            type="button"
            onClick={fetchSearchData}
          >
            <IoIosSearch size="20" />
          </SearchButton>
        </InputItem>
      </InputContainer>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    const clickNoSearchRetryBtn = () => this.getVideos()
    const isEmptyView = videosList.length === 0
    if (!isEmptyView) {
      return (
        <>
          {this.renderInput()}
          <VideosContainer>
            {videosList.map(item => (
              <VideoItem key={item.id} videoItem={item} />
            ))}
          </VideosContainer>
        </>
      )
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              {this.renderInput()}
              <NoSearchResultContainer>
                <NoSearchImage
                  alt="no videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                />
                <NoSearchHeading darkColor={darkTheme}>
                  No Search results found
                </NoSearchHeading>
                <NoSearchText darkColor={darkTheme}>
                  Try different key words or remove search filter
                </NoSearchText>
                <NoSearchRetryBtn
                  type="button"
                  onClick={clickNoSearchRetryBtn}
                  darkColor={darkTheme}
                >
                  Retry
                </NoSearchRetryBtn>
              </NoSearchResultContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => {
    const clickFailureViewRetrybtn = () => this.getVideos()
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

  swithBox = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstands.success:
        return this.renderSuccessView()
      case apiStatusConstands.failure:
        return this.renderFailureView()
      case apiStatusConstands.inprogress:
        return this.renderLoader()
      default:
        return null
    }
  }

  renderBanner = () => {
    const closeBanner = () => this.setState({showBanner: false})
    return (
      <BannerSection data-testid="banner">
        <BsLogoContainer>
          <BsLogo alt="nxt watch logo" src={lightLogoImage} />
          <BsCloseBtn data-testid="close" type="button" onClick={closeBanner}>
            <IoMdClose size="25" />
          </BsCloseBtn>
        </BsLogoContainer>
        <BsPara>Buy Nxt Watch Premium prepaid plans with UPI</BsPara>
        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
      </BannerSection>
    )
  }

  render() {
    const {showBanner} = this.state
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {darkTheme, activeSide, changeActiveSide} = value
            if (activeSide !== 'HOME') {
              changeActiveSide('HOME')
            }
            return (
              <HomeRoute data-testid="home" darkTheme={darkTheme}>
                <Headers />
                <ResponsiveContainer>
                  <Sidebar />
                  <HomeContainer darkTheme={darkTheme}>
                    {showBanner && this.renderBanner()}
                    {this.swithBox()}
                  </HomeContainer>
                </ResponsiveContainer>
              </HomeRoute>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default Home
