import {Component} from 'react'
import Headers from '../Headers'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import {
  ResponsiveContainer,
  NotFoundContainer,
  MainContainer,
  NFHeading,
  NFParagrap,
  NotFoundImage,
} from './StyledComponents'

const notFoundLightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const notFoundDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Headers />
              <ResponsiveContainer>
                <Sidebar />
                <NotFoundContainer data-testid="banner" darkTheme={darkTheme}>
                  <MainContainer>
                    <NotFoundImage
                      alt="not found"
                      src={darkTheme ? notFoundDarkTheme : notFoundLightTheme}
                    />
                    <NFHeading darkTheme={darkTheme}>Page Not Found</NFHeading>
                    <NFParagrap>
                      we are sorry, the page you requested could not be found.
                    </NFParagrap>
                  </MainContainer>
                </NotFoundContainer>
              </ResponsiveContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default NotFound
