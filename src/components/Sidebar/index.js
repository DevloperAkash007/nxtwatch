import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import {
  SidebarContainer,
  SidesSection,
  ContactUsSection,
  NavItem,
  LinkButton,
  LinkItem,
  NavItemName,
  ContactUsHeading,
  ContactUsPara,
  ContactUsMediaContainer,
  SocialMediaImage,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const twitterLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
const facebookLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
const linkedInLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'

const sides = [
  {id: 'HOME', name: 'Home'},
  {id: 'TRENDING', name: 'Trending'},
  {id: 'GAMING', name: 'Gaming'},
  {id: 'SAVED-VIDEOS', name: 'Saved Videos'},
]

class Sidebar extends Component {
  renderNavLink = item => (
    <ThemeContext.Consumer key={`section${item.id}`}>
      {value => {
        const {activeSide, changeActiveSide, darkTheme} = value

        const {id, name} = item

        const onClickRouteButton = () => {
          changeActiveSide(id)
        }

        let icon = ''
        switch (id) {
          case 'HOME':
            icon = (
              <AiFillHome
                color={
                  darkTheme
                    ? activeSide === sides[0].id
                      ? '#ff0000'
                      : '#ffffff'
                    : activeSide === sides[0].id
                    ? '#ff0000'
                    : '#000000'
                }
                size="20"
              />
            )
            break
          case 'TRENDING':
            icon = (
              <HiFire
                color={
                  darkTheme
                    ? activeSide === sides[1].id
                      ? '#ff0000'
                      : '#ffffff'
                    : activeSide === sides[1].id
                    ? '#ff0000'
                    : '#000000'
                }
                size="20"
              />
            )
            break
          case 'GAMING':
            icon = (
              <SiYoutubegaming
                color={
                  darkTheme
                    ? activeSide === sides[2].id
                      ? '#ff0000'
                      : '#ffffff'
                    : activeSide === sides[2].id
                    ? '#ff0000'
                    : '#000000'
                }
                size="20"
              />
            )
            break
          case 'SAVED-VIDEOS':
            icon = (
              <RiPlayListAddFill
                color={
                  darkTheme
                    ? activeSide === sides[3].id
                      ? '#ff0000'
                      : '#ffffff'
                    : activeSide === sides[3].id
                    ? '#ff0000'
                    : '#000000'
                }
                size="20"
              />
            )
            break
          default:
            null
        }

        const backgroundColor = activeSide === id
        const to = `/${
          id.toLocaleLowerCase() === 'home' ? '' : id.toLocaleLowerCase()
        }`

        return (
          <LinkItem to={to} key={id}>
            <NavItem backgroundColor={backgroundColor} darkTheme={darkTheme}>
              <LinkButton type="button" onClick={onClickRouteButton}>
                {icon}
                <NavItemName darkTheme={darkTheme}>{name}</NavItemName>
              </LinkButton>
            </NavItem>
          </LinkItem>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <SidebarContainer darkTheme={darkTheme}>
              <SidesSection>
                {sides.map(each => this.renderNavLink(each))}
              </SidesSection>
              <ContactUsSection>
                <ContactUsHeading darkTheme={darkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <ContactUsMediaContainer>
                  <SocialMediaImage alt="facebook logo" src={facebookLogo} />
                  <SocialMediaImage alt="twitter logo" src={twitterLogo} />
                  <SocialMediaImage alt="linked in logo" src={linkedInLogo} />
                </ContactUsMediaContainer>
                <ContactUsPara darkTheme={darkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsPara>
              </ContactUsSection>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Sidebar
