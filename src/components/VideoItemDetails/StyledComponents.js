import styled from 'styled-components'

export const NoDisplayButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideoItemDetailsRoute = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 50%;
  max-width: 500px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 600;
  color: ${props => (props.darkColor ? '#f4f4f4' : '#231f20')};
`

export const FailureViewText = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  margin-top: 0px;
  text-align: center;
  font-weight: 500;
  color: ${props => (props.darkColor ? '#64748b' : '#616e7c')};
`

export const FailureViewRetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const VideoContentContainer = styled.div``

export const VideoTitle = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.darkColor ? '#f4f4f4' : '#212121')};
  margin-bottom: 4px;
`

export const ThumbnailUrlImage = styled.img``

export const UserActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ViewsAndPublishedAtContainer = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.darkColor ? '#cccccc' : '#64748b')};
  margin-right: 30px;
`
export const Published = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.darkColor ? '#cccccc' : '#64748b')};
  margin-right: 30px;
`

// export const LikesDisLikesSaveContainer = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style-type: none;
//   padding: 0px;
// `

export const LikesDisLikesSaveContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0px;
`
export const LDS = styled.li`
  margin: 0px 0px 0px 10px;
  width: 90px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    margin: 0px 10px 0px 0px;
  } ;
`

export const UserBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.status ? '#2563eb' : '#64748b')};
  margin-left: 5px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const UserLikeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const UserDislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDisLike ? '#2563eb' : '#64748b')};
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const BtnName = styled.p`
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const HorizontalLine = styled.hr`
  margin-top: 2px;
  margin-bottom: 25px;
`

export const ProfileContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 60px;
  align-self: flex-start;
`

export const Content = styled.div`
  margin-left: 15px;
`

export const Name = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkColor ? '#616e7c' : '#64748b')};
`

export const SubscriberCount = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkColor ? '#cbd5e1' : '#64748b')};
`

export const Description = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkColor ? '#ebebeb' : '#64748b')};
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`
export const DescriptionForSmDevices = styled.p`
  display: none;
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => (props.darkColor ? '#ebebeb' : '#64748b')};
  font-weight: 600;
  @media screen and (max-width: 767px) {
    display: block;
  } ;
`
