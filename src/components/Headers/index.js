import {Component} from 'react'
import { Link, withRouter} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {TiWeatherSunny} from 'react-icons/ti'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  NavBar,
  NavContainer,
  WebsiteLogo,
  NavLinksContainer,
  GiHamburgerMenuButton,
  ThemeButton,
  LogoutIcon,
  CloseButtonForMenu,
  NavLinkList,
  LogoutButton,
  NavLinksContainerForSmallDevices,
  Proflie,
  PopupDisplayContainer,
  PopupText,
  RouteText,
  PopupButtonContainer,
  PopupBtn,
  PopupDisplayContainerForMenu,
  RoutingContainer,
  RouteLink,
} from './StyledComponents'

const sides = [
  {id: 'HOME', name: 'Home'},
  {id: 'TRENDING', name: 'Trending'},
  {id: 'GAMING', name: 'Gaming'},
  {id: 'SAVED-VIDEOS', name: 'Saved Videos'},
]

const lightLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const profile =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

class Headers extends Component {
  overcomeBackgroundColorOfSides = (darkTheme, activeSide, sideId) => {
    if (activeSide === sideId) {
      return '#ff0000'
    }
    if (darkTheme) {
      return '616e7c'
    }
    return '#000000'
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, changeTheme, activeSide, changeActiveSide} = value

          const onClickLogoutButton = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

         

          return (
            <NavBar darkTheme={darkTheme}>
              <NavContainer>
                <Link to="/">
                  <WebsiteLogo
                    alt="website logo"
                    src={darkTheme ? darkLogoImage : lightLogoImage}
                  />
                </Link>
                <NavLinksContainer>
                  <NavLinkList>
                    <ThemeButton
                      type="button"
                      data-testid="theme"
                      onClick={() => changeTheme()}
                    >
                      {darkTheme ? (
                        <TiWeatherSunny color="#ffffff" size="40" />
                      ) : (
                        <FaMoon color="#000000" size="30" />
                      )}
                    </ThemeButton>
                  </NavLinkList>
                  <NavLinkList>
                    <Proflie alt="profile" src={profile} />
                  </NavLinkList>
                  <NavLinkList>
                    <Popup
                      modal
                      className="popup-content"
                      trigger={
                        <LogoutButton
                          onClick={onClickLogoutButton}
                          type="button"
                          darkTheme={darkTheme}
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopupDisplayContainer darkTheme={darkTheme}>
                          <PopupText darkTheme={darkTheme}>
                            Are you sure, you want to logout
                          </PopupText>
                          <PopupButtonContainer>
                            <PopupBtn
                              type="button"
                              onClick={() => close()}
                              transparent
                            >
                              Cancel
                            </PopupBtn>
                            <PopupBtn
                              type="button"
                              onClick={onClickLogoutButton}
                            >
                              Confirm
                            </PopupBtn>
                          </PopupButtonContainer>
                        </PopupDisplayContainer>
                      )}
                    </Popup>
                  </NavLinkList>
                </NavLinksContainer>
                <NavLinksContainerForSmallDevices>
                  <NavLinkList>
                    {darkTheme ? (
                      <ThemeButton
                        type="button"
                        data-testid="theme"
                        onClick={() => changeTheme()}
                      >
                        <TiWeatherSunny color="#ffffff" size="40" />
                      </ThemeButton>
                    ) : (
                      <ThemeButton
                        type="button"
                        data-testid="theme"
                        onClick={() => changeTheme()}
                      >
                        <FaMoon color="#000000" size="30" />
                      </ThemeButton>
                    )}
                  </NavLinkList>
                  <NavLinkList>
                    <Popup
                      modal
                      className="popup-content"
                      trigger={
                        <GiHamburgerMenuButton type="button">
                          <GiHamburgerMenu
                            color={darkTheme ? '#ffffff' : '#181818'}
                            size="30"
                          />
                        </GiHamburgerMenuButton>
                      }
                    >
                      {close => (
                        <PopupDisplayContainerForMenu darkTheme={darkTheme}>
                          <CloseButtonForMenu
                            type="button"
                            onClick={() => close()}
                          >
                            <IoMdClose
                              size="30"
                              color={darkTheme ? '#ffffff' : '#181818'}
                            />
                          </CloseButtonForMenu>
                          <RoutingContainer>
                            <Link to="/" className="link">
                              <RouteLink
                                darkTheme={darkTheme}
                                onClick={() => changeActiveSide(sides[0].id)}
                                activeSide={activeSide === sides[0].id}
                              >
                                <AiFillHome
                                  size="30"
                                  color={this.overcomeBackgroundColorOfSides(
                                    darkTheme,
                                    activeSide,
                                    sides[0].id,
                                  )}
                                />
                                <RouteText darkTheme={darkTheme}>
                                  Home
                                </RouteText>
                              </RouteLink>
                            </Link>
                            <Link to="/trending" className="link">
                              <RouteLink
                                darkTheme={darkTheme}
                                activeSide={activeSide === sides[1].id}
                                onClick={() => changeActiveSide(sides[1].id)}
                              >
                                <HiFire
                                  size="30"
                                  color={this.overcomeBackgroundColorOfSides(
                                    darkTheme,
                                    activeSide,
                                    sides[1].id,
                                  )}
                                />
                                <RouteText darkTheme={darkTheme}>
                                  Trending
                                </RouteText>
                              </RouteLink>
                            </Link>
                            <Link to="/gaming" className="link">
                              <RouteLink
                                darkTheme={darkTheme}
                                activeSide={activeSide === sides[2].id}
                                onClick={() => changeActiveSide(sides[2].id)}
                              >
                                <SiYoutubegaming
                                  size="30"
                                  color={this.overcomeBackgroundColorOfSides(
                                    darkTheme,
                                    activeSide,
                                    sides[2].id,
                                  )}
                                />
                                <RouteText darkTheme={darkTheme}>
                                  Gaming
                                </RouteText>
                              </RouteLink>
                            </Link>
                            <Link to="/saved-videos" className="link">
                              <RouteLink
                                darkTheme={darkTheme}
                                activeSide={activeSide === sides[3].id}
                                onClick={() => changeActiveSide(sides[3].id)}
                              >
                                <RiPlayListAddFill
                                  size="30"
                                  color={this.overcomeBackgroundColorOfSides(
                                    darkTheme,
                                    activeSide,
                                    sides[3].id,
                                  )}
                                />
                                <RouteText darkTheme={darkTheme}>
                                  Saved Videos
                                </RouteText>
                              </RouteLink>
                            </Link>
                          </RoutingContainer>
                        </PopupDisplayContainerForMenu>
                      )}
                    </Popup>
                  </NavLinkList>
                  <NavLinkList>
                    <Popup
                      modal
                      className="popup-content"
                      trigger={
                        <LogoutIcon type="button" onClick={onClickLogoutButton}>
                          <FiLogOut
                            color={darkTheme ? '#ffffff' : '#181818'}
                            size="30"
                          />
                        </LogoutIcon>
                      }
                    >
                      {close => (
                        <PopupDisplayContainer darkTheme={darkTheme}>
                          <PopupText darkTheme={darkTheme}>
                            Are you sure, you want to logout
                          </PopupText>
                          <PopupButtonContainer>
                            <PopupBtn
                              type="button"
                              onClick={() => close()}
                              transparent
                            >
                              Cancel
                            </PopupBtn>
                            <PopupBtn
                              type="button"
                              onClick={onClickLogoutButton}
                            >
                              Confirm
                            </PopupBtn>
                          </PopupButtonContainer>
                        </PopupDisplayContainer>
                      )}
                    </Popup>
                  </NavLinkList>
                </NavLinksContainerForSmallDevices>
              </NavContainer>
            </NavBar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Headers)
