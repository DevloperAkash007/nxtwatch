import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.nav`
  width: 20%;
  flex-shrink: 0;
  padding-right: 10px;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ffffff')};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`
export const SidesSection = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const NavItem = styled.li`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   cursor: pointer;
   padding: 10px 0px 10px 10px;
   text-decoration: none;
   background-color: ${props => {
     if (props.darkTheme) {
       if (props.backgroundColor) {
         return '#383838'
       }
     } else if (props.backgroundColor) {
       return '#e2e8f0'
     }
     return null
   }}};
    //  props.darkTheme
    //    ? props.backgroundColor
    //      ? '#383838'
    //      : null
    //    : props.backgroundColor
    //    ? '#e2e8f0'
    //    : null};
`
export const NavItemName = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 700;
  margin: 0px;
  margin-left: 15px;
  padding: 0px;
`
export const ContactUsHeading = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 900;
`

export const ContactUsMediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const SocialMediaImage = styled.img`
  width: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const ContactUsPara = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  width: 90%;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
// export const LinkButton = styled.button`
//   border: none;
//   background-color: transparent;
//   outline: none;
//   cursor: pointer;
//   padding: 10px 0px 10px 10px;
//   margin: 0px;
//   display:flex;
//   align-items: center;
//   width: 100%;
// `
export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`
