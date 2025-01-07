import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {ListItem, ThumbnailUrl, Title, ViewConut} from './StyledComponents'

const TrendinVideoItem = props => {
  const {videoItem} = props
  const {id, thumbnailUrl, title, viewCount} = videoItem

  return (
    <ThemeContext>
      {value => {
        const {darkTheme} = value
        return (
          <ListItem>
            <Link to={`/videos/${id}`}>
              <ThumbnailUrl alt="video thumbnail" src={thumbnailUrl} />
              <Title darkTheme={darkTheme}>{title}</Title>
              <ViewConut darkTheme={darkTheme}>
                {viewCount} Watching Worldwide
              </ViewConut>
            </Link>
          </ListItem>
        )
      }}
    </ThemeContext>
  )
}
export default TrendinVideoItem
