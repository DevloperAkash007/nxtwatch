import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  LinkItem,
  ListItem,
  ThumbnailUrl,
  ContentContainer,
  TextContainer,
  Title,
  ThumbnailUrlContainer,
  Name,
  ViewAndPublishedContainer,
  ViewConut,
  PublishedAt,
} from './StyledComponents'

const TrendingVideoItem = props => {
  const {videoItem} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = videoItem
  const {name, profileImageUrl} = channel

  const timeformat = formatDistanceToNow(new Date(publishedAt))
  const timeformtalist = timeformat.split(' ')
  const timeFormat = () => {
    if (timeformtalist[2] === undefined) {
      return `${timeformtalist[0]} ${timeformtalist[1]} ago`
    }
    return `${timeformtalist[1]}  ${timeformtalist[2]} ago`
  }

  const requiedFormatTime = timeFormat(timeformat)

  return (
    <ThemeContext>
      {value => {
        const {darkTheme} = value
        return (
          <ListItem>
            <LinkItem to={`/videos/${id}`}>
              <ThumbnailUrlContainer>
                <ThumbnailUrl alt="video thumbnail" src={thumbnailUrl} />
              </ThumbnailUrlContainer>
              <ContentContainer>
                <TextContainer>
                  <Title darkTheme={darkTheme}>{title}</Title>
                  <Name darkTheme={darkTheme}>{name}</Name>
                  <ViewAndPublishedContainer>
                    <ViewConut darkTheme={darkTheme}>
                      {viewCount} views
                    </ViewConut>
                    <PublishedAt darkTheme={darkTheme}>
                      {requiedFormatTime}
                    </PublishedAt>
                  </ViewAndPublishedContainer>
                </TextContainer>
              </ContentContainer>
            </LinkItem>
          </ListItem>
        )
      }}
    </ThemeContext>
  )
}
export default TrendingVideoItem
