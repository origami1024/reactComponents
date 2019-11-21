import React from 'react';
import styled from 'styled-components';


const UPWrapper = styled.div`
  --wrapperBG: #FCFCFC;
  /* --wrapperBG: red; */
  --innerBorder: #E1E1E1;
  --mainText: #5A5A5A;
  --tagText: #757575;
  --tagBadgeBG: #E3E3E3;
  --tagBadgeText: #9C9C9C;
  display: flex;
  padding: 9px 10px;
  margin: 5px;
  border-radius: 80px;
  max-width: 960px;
  width: 100%;
  box-sizing: border-box;
  font-family: Circle, sans-serif;
  font-weight: normal;
  background-color: var(--wrapperBG);
  /* border-bottom: 1px solid #44444427; */
  border: 1px solid var(--innerBorder);
  box-shadow: 0px 1px 5px rgba(68, 68, 68, 0.27);
  @media (max-width: 500px) {
    flex-direction: column;
    border-radius: 45px;
  }
`
  const UPMain = styled.div`
    display: flex;
    align-items: center;
    min-width: 210px;
    width: 210px;
    padding-right: 9px;
    border-right: 2px solid var(--innerBorder);
    @media (max-width: 500px) {
      border-right: 0;
      padding-right: 0;
      padding-bottom: 9px;
      border-bottom: 1px solid var(--innerBorder);
      width: auto;
    }
  `
    const UPMainPhoto = styled.div`
      background-image: url(${props => props.imgPath});
      background-size: 100% 100%;
      width: 78px;
      height: 78px;
      border-radius: 100%;
      margin-right: 10px;
    `
    const UPMainContent = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--mainText);
      h3 {
        margin: 0;
        margin-bottom: -1px;
        font-weight: bold;
        font-size: 20px;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 17px;
      }
    `

  const UPTags = styled.div`
    border: 0px solid var(--innerBorder);
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: start;
    padding: 5px 10px;
    border-right-width: 2px;
    @media (max-width: 500px) {
      border-right: 0;
      border-bottom-width: 1px;
      padding: 15px 0px;
    }
  `
    const UPTag = styled.div`
      display: flex;
      padding: 0;
      padding-left: 7px;
      margin: 3px;
      font-size: 16px;
      color: var(--tagText);
      background-color: #fff;
      border-radius: 999px;
      border: 1px solid --innerBorder;
      border-right: 0;
      cursor: pointer;
      height: 25px;
    `
    const UPTagBadge = styled.span`
      background-color: var(--tagBadgeBG);
      color: var(--tagBadgeText);
      font-size: 12px;
      font-weight: bold;
      border-radius: 999px;
      padding: 0 7px;
      margin-left: 5px;
      line-height: 25px;
      min-width: 25px;
      box-sizing: border-box;
      text-align: center;
    `
    

  const UPControls = styled.div`
    min-width: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      width: auto;
      padding: 15px 0;
    }
  `
    const UPModalBtn = styled.button`
      border-radius: 100%;
      border: 0;
      width: 53px;
      height: 53px;
      color: white;
      font-size: 30px;
      background-color: palevioletred;
      cursor: pointer;
      box-shadow: 0 0 5px #faad;
      transition-duration: 0.5s;
      &&:hover{
        padding-right: 20px;
        box-shadow: 0 0 5px 3px #f66d;
      }
      &&:hover:after{
        opacity: 1;
        transform: translateX(0px);
      }
      &&:after{
        opacity: 0;
        position:absolute;
        transform: translateX(-10px);
        content: '\\00bb';
        transition-duration: 0.5s;
      }
    `



function UserProfile(props) {
  console.log(props)
  return (
    <UPWrapper>
      <UPMain>
        <UPMainPhoto imgPath={props.user.photoUrl}></UPMainPhoto>
        <UPMainContent>
          <h3>{props.user.nick}</h3>
          <p>{props.user.age} лет</p>
          <p>г. {props.user.city}</p>
        </UPMainContent>
      </UPMain>
      <UPTags>
  {props.tags.map((tag, index) => <UPTag key={index}>{tag.label}<UPTagBadge>{tag.content.text ? tag.content.text : tag.content.icon}</UPTagBadge></UPTag>)}
      </UPTags>
      <UPControls>
        <UPModalBtn>F</UPModalBtn>
      </UPControls>
    </UPWrapper>
  );
}
export default UserProfile;