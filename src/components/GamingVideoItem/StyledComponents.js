import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 220px;
  display: flex;
  margin: 0px 30px 30px 0px;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 250px;
  } ;
`

export const ThumbnailUrl = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 10px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#212121')};
`

export const ViewConut = styled.p`
  font-size: 18px;
  font-family: 20px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  margin: 0px;
`
