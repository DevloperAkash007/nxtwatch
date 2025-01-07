import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemDetailsRoute,
  ResponsiveContainer,
  VideoItemDetailsContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryBtn,
  VideoContentContainer,
  VideoTitle,
  ThumbnailUrlImage,
  UserActionsContainer,
  ViewsAndPublishedAtContainer,
  Views,
  Published,
  LikesDisLikesSaveContainer,
  LDS,
  UserBtn,
  UserLikeBtn,
  UserDislikeBtn,
  DescriptionForSmDevices,
  BtnName,
  HorizontalLine,
  ProfileContainer,
  ProfileImage,
  Content,
  Name,
  SubscriberCount,
  Description,
} from './StyledComponents'

const apiStatusConstands = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstands.initial,
    videoItemDetails: {},
    isLike: false,
    isDisLike: false,
    isSave: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedData = videoDetails => ({
    id: videoDetails.id,
    description: videoDetails.description,
    publishedAt: videoDetails.published_at,
    thumbnailUrl: videoDetails.thumbnail_url,
    title: videoDetails.title,
    viewCount: videoDetails.view_count,
    videoUrl: videoDetails.video_url,
    channel: {
      name: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
      subscriberCount: videoDetails.channel.subscriber_count,
    },
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstands.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const videoDetails = data.video_details
        const formmatedVideoDetails = this.getFormattedData(videoDetails)
        this.setState({
          videoItemDetails: formmatedVideoDetails,
          apiStatus: apiStatusConstands.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstands.failure,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  renderFailureView = () => {
    const clickFailureViewRetrybtn = () => this.getVideoItemDetails()
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
    <ThemeContext>
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
    </ThemeContext>
  )

  getPublishedAtTime = publishedAt => {
    const timeformat = formatDistanceToNow(new Date(publishedAt))
    const timeformtalist = timeformat.split(' ')

    if (timeformtalist[2] === undefined) {
      return `${timeformtalist[0]} ${timeformtalist[1]} ago`
    }
    return `${timeformtalist[1]}  ${timeformtalist[2]} ago`
  }

  renderVideoItemDetailsOnSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {
          darkTheme,
          savedVideosList,
          addSavedVideo,
          removeSavedVideo,
        } = value
        const {videoItemDetails, isLike, isDisLike, isSave} = this.state

        const {
          id,
          description,
          publishedAt,
          videoUrl,
          title,
          viewCount,
          thumbnailUrl,
          channel,
        } = videoItemDetails

        const {name, profileImageUrl, subscriberCount} = channel

        const requiredPublishedAt = this.getPublishedAtTime(publishedAt)

        const alreadySavedorNot =
          savedVideosList.find(item => item.id === id) !== undefined

        const saveVideoItem = () => {
          this.setState(prevState => ({isSave: !prevState.isSave}))
          if (!alreadySavedorNot) {
            addSavedVideo(videoItemDetails)
          } else {
            removeSavedVideo(id)
          }
        }

        const onClickLike = () => {
          if (isDisLike) {
            this.setState({isDisLike: false})
          }
          this.setState(prevState => ({isLike: !prevState.isLike}))
        }

        const onClickDisLike = () => {
          if (isLike) {
            this.setState({
              isLike: false,
            })
          }
          this.setState(prevState => ({isDisLike: !prevState.isDisLike}))
        }

        return (
          <VideoContentContainer>
            <ReactPlayer
              width="100%"
              height="500px"
              url={videoUrl}
              light={<ThumbnailUrlImage src={thumbnailUrl} alt="Thumbnail" />}
            />

            <VideoTitle darkColor={darkTheme}>{title}</VideoTitle>

            <UserActionsContainer>
              <ViewsAndPublishedAtContainer>
                <Views darkColor={darkTheme}>{viewCount} views</Views>
                <Published darkColor={darkTheme}>
                  {requiredPublishedAt}
                </Published>
              </ViewsAndPublishedAtContainer>
              <LikesDisLikesSaveContainer>
                <BiLike size="25" color={isLike ? '#2563eb' : '#64748b'} />
                <UserBtn type="button" onClick={onClickLike} status={isLike}>
                  Like
                </UserBtn>
                <BiDislike
                  size="25"
                  color={isDisLike ? '#2563eb' : '#64748b'}
                />
                <UserBtn
                  type="button"
                  onClick={onClickDisLike}
                  status={isDisLike}
                >
                  Dislike
                </UserBtn>
                <RiPlayListAddFill
                  size="20"
                  color={alreadySavedorNot ? '#2563eb' : '#64748b'}
                />
                {alreadySavedorNot && (
                  <UserBtn
                    type="button"
                    onClick={saveVideoItem}
                    status={alreadySavedorNot}
                  >
                    Saved
                  </UserBtn>
                )}
                {!alreadySavedorNot && (
                  <UserBtn
                    type="button"
                    onClick={saveVideoItem}
                    isSave={alreadySavedorNot}
                  >
                    Save
                  </UserBtn>
                )}
              </LikesDisLikesSaveContainer>
            </UserActionsContainer>
            <HorizontalLine />
            <ProfileContainer>
              <ProfileImage alt="channel logo" src={profileImageUrl} />
              <Content>
                <Name darkColor={darkTheme}>{name}</Name>
                <SubscriberCount darkColor={darkTheme}>
                  {subscriberCount} subscribers
                </SubscriberCount>
                <Description darkColor={darkTheme}>{description}</Description>
              </Content>
            </ProfileContainer>
          </VideoContentContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstands.success:
        return this.renderVideoItemDetailsOnSuccessView()
      case apiStatusConstands.inprogress:
        return this.renderLoader()
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
          const {darkTheme} = value
          return (
            <VideoItemDetailsRoute
              data-testid="videoItemDetails"
              darkTheme={darkTheme}
            >
              <Headers />
              <ResponsiveContainer>
                <Sidebar />
                <VideoItemDetailsContainer darkTheme={darkTheme}>
                  {this.renderView()}
                </VideoItemDetailsContainer>
              </ResponsiveContainer>
            </VideoItemDetailsRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
