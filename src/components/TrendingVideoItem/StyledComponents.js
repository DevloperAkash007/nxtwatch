import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 90%;
  display: flex;
  margin-bottom: 20px;
  margin-right: 40px;
  margin-left: 40px;
  @media screen and (max-width: 576px){
    flex-direction: column;
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
  };
`

export const ThumbnailUrlContainer = styled.div`
  width: 45%;
  @media screen and (max-width: 576px){
    width: 100%;
  };
`

export const ThumbnailUrl = styled.img`
  width: 100%;
`
export const ContentContainer = styled.div`
  width: 45%;
  display: flex;
  margin-left: 15px;
  @media screen and (max-width: 576px){
    width: 100%;
    margin-top: 15px;
  };
`

export const TextContainer = styled.div``

export const Title = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 0px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#212121')};
  margin: 0px 0px 10px 0px;
`
export const Name = styled.p`
  font-size: 15px;
  font-family: 20px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  margin: 0px 0px 5px 0px;
`
export const ViewAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`

export const ViewConut = styled.p`
  font-size: 15px;
  font-family: 20px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  margin: 0px;
  list-style-type: none;
  margin-right: 40px;
`

export const PublishedAt = styled.p`
  font-size: 15px;
  font-family: 20px;
  margin: 0px;
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  padding: 0px;
  list-style-type: disc;
  font-weight: 600;
`
