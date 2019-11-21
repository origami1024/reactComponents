import React from 'react';
import styled from 'styled-components';
import Icons from './../assets/Icons.js'

let idToColorTable = {
  1: '#5EDE82',
  5: '#DE9C5E',
  6: '#B55EDE',
}

const Wrapper = styled.div`
  --wrapperBG: #FCFCFC;
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
  box-shadow: 0px 1px 5px rgba(68, 68, 68, 0.27);
  @media (max-width: 500px) {
    flex-direction: column;
    border-radius: 45px;
  }
`
  const Main = styled.div`
    display: flex;
    align-items: center;
    min-width: 210px;
    width: 210px;
    padding-right: 9px;
    border-right: 1px solid var(--innerBorder);
    @media (max-width: 500px) {
      border-right: 0;
      padding-right: 0;
      padding-bottom: 9px;
      border-bottom: 1px solid var(--innerBorder);
      width: auto;
    }
  `
    const MainPhoto = styled.div`
      background-image: url(${props => props.imgPath});
      background-size: 100% 100%;
      width: 78px;
      height: 78px;
      border-radius: 100%;
      margin-right: 10px;
    `
    const MainContent = styled.div`
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

  const Tags = styled.div`
    border: 0px solid var(--innerBorder);
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: start;
    padding: 5px 10px;
    border-right-width: 1px;
    
    @media (max-width: 500px) {
      border-right: 0;
      border-bottom-width: 1px;
      padding: 15px 0px;
    }
  `
    const Tag = styled.div`
      display: flex;
      padding: 0;
      padding-left: 7px;
      margin: 3px;
      font-size: 16px;
      color: var(--tagText);
      background-color: #F0F0F0;
      border-radius: 999px;
      border: 1px solid --innerBorder;
      border-right: 0;
      cursor: pointer;
      height: 25px;
    `
    const TagTxtBadge = styled.span`
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
    const TagIcoBadge = styled.span`
      background-color: ${props => props.bgColor};
      background-image: url(${props => props.bgIcon});
      background-repeat: no-repeat;
      background-position: 50%;
      
      border-radius: 999px;
      margin-left: 5px;
      line-height: 25px;
      min-width: 25px;
      width: 25px;
      box-sizing: border-box;
    `
    

  const Controls = styled.div`
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
    const ModalBtn = styled.button`
      background-image: url(${Icons['profile-flag']});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      border-radius: 100%;
      border: 0;
      width: 53px;
      height: 53px;
      color: white;
      font-size: 30px;
      background-color: #FC6363;
      cursor: pointer;
      box-shadow: 0px 0px 4px #FC6363;
      transition-duration: 0.3s;
      &&:hover{
        background-image: url(${Icons['profile-flag-full']});
      }
    `



function Profile(props) {
  return (
    <Wrapper>
      <Main>
        <MainPhoto imgPath={props.user.photoUrl}></MainPhoto>
        <MainContent>
          <h3>{props.user.nick}</h3>
          <p>{props.user.age} лет</p>
          <p>г. {props.user.city}</p>
        </MainContent>
      </Main>
      <Tags>
  {props.user.tags.map((tag, index) => <Tag key={index}>{tag.label}{tag.content.text ? <TagTxtBadge>{tag.content.text}</TagTxtBadge> : <TagIcoBadge bgIcon={Icons[tag.content.icon+'-active']} bgColor={idToColorTable[tag.id]}></TagIcoBadge>}</Tag>)}
      </Tags>
      <Controls>
        <ModalBtn></ModalBtn>
      </Controls>
    </Wrapper>
  );
}
export default Profile;