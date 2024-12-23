import styled from 'styled-components'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export const NavBar = styled.nav`
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ffffff')};
  padding: 10px 30px 10px 30px;
  height: 10vh;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
`
export const NavContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`
export const WebsiteLogo = styled.img`
  width: 180px;
  @media screen and (max-width: 767px){
    width: 150px;
  }
`
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  align-items:center;
  @media screen and (max-width: 767px){
    display: none;
  }
`
export const NavLinksContainerForSmallDevices = styled(NavLinksContainer)`
  display: none;
  @media screen and (max-width: 767px){
    display: flex;
  }
`
export const NavLinkList = styled.li`
  margin: 0px 10px 0px 10px;
`
export const Proflie = styled.img`
  width: 40px;
`

export const LogoutButton = styled.button`
  padding: 10px 40px 10px 40px;
  color:  ${props => (props.darkTheme ? '#ffffff' : '#4f46e5')};
  background-color: transparent;
  border: 2px solid ${props => (props.darkTheme ? '#ffffff' : '#4f46e5')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const GiHamburgerMenuButton = styled(ThemeButton)``

export const LogoutIcon = styled(ThemeButton)``

export const PopupDisplayContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#1e293b' : '#f9f9f9')};
  padding: 20px;
  display:flex;
  margin: 0px;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  @media screen and (min-width: 767px){
    width: 360px;
  }
`
export const PopupText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  margin-bottom: 30px;
`
export const PopupButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align:center;
`
export const PopupBtn = styled.button`
  background-color: ${props => (props.transparent ? 'transparent' : '#3b82f6')};
  border:  ${props => (props.transparent ? '2px solid  #64748b' : 'none')};
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.transparent ? '#64748b' : '#ffffff')};
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  margin: 5px;
  cursor: pointer;
`

export const PopupDisplayContainerForMenu = styled.div`
  background-color: ${props => (props.darkTheme ? '#1e293b' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items:center;
  width:100%;
  height: 100vh;
  padding: 20px;
`
export const RoutingContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
export const RouteLink = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 0px;
  margin-bottom: 5px;
  background-color: ${props =>
    props.darkTheme
      ? props.activeSide
        ? '#383838'
        : null
      : props.activeSide
      ? '#e2e8f0'
      : null};
`
export const CloseButtonForMenu = styled(ThemeButton)`
   align-self: flex-end;
`
export const RouteText = styled.p`
  font-size: 20px;
   color:  ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-weight: bold;
  font-family: 'Roboto';
  margin: 0px;
  margin-left: 20px;
  padding: 0px;
`
export const RoutingButton = styled(ThemeButton)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0px;
  width: 200px;
`
