import ThemeContext from '../../context/ThemeContext'
import {
  LinkItem,
  ListItem,
  ThumbnailUrl,
  Title,
  ThumbnailUrlContainer,
  ViewConut,
} from './StyledComponents'

const TrendinVideoItem = props => {
  const {videoItem} = props
  const {id, thumbnailUrl, title, viewCount} = videoItem

  return (
    <ThemeContext>
      {value => {
        const {darkTheme} = value
        return (
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailUrl alt="video thumbnail" src={thumbnailUrl} />

              <Title darkTheme={darkTheme}>{title}</Title>
              <ViewConut darkTheme={darkTheme}>
                {viewCount} Watching Worldwide
              </ViewConut>
            </ListItem>
          </LinkItem>
        )
      }}
    </ThemeContext>
  )
}
export default TrendinVideoItem
