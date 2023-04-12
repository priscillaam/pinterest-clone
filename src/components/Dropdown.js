import React from 'react';
import styled from 'styled-components';
import OutwardArrow from '@mui/icons-material/NorthEast';
import avatar from '../assets/avatar.jpg';
import { Link } from "react-router-dom";

function CreateDropdown(){
  return (
    <CreateDropDownContainer >
    <DropDownList>
        <ListItem>Create Idea Pin</ListItem>
        <ListItem>Create Pin</ListItem>
    </DropDownList>
    </CreateDropDownContainer> 
  )
}
function SelectMobileDropdown(props){
  return (
    <SelectDropDownContainer >
    <DropDownList>
      <Link to="/"><ListItem onClick={() => {props.setSelected('Home')}}>Home</ListItem></Link>
      <Link to="/today"><ListItem onClick={() => {props.setSelected('Today')}}>Today</ListItem></Link>
    </DropDownList>
    </SelectDropDownContainer>
  )
}

function NotifDropdown(){
  return (
    <NotifDropdownContainer >
    </NotifDropdownContainer> 
  )
}

function MsgDropdown(){
  return (
    <CreateDropDownContainer >
    <DropDownList>
        <ListItem>Create Idea Pin</ListItem>
        <ListItem>Create Pin</ListItem>
    </DropDownList>
    </CreateDropDownContainer> 
  )
}

function ProfileDropdown() {
  return (
    <ProfileDropDownContainer >
    <ProfileDropDownList>
    <Label>Currently in</Label>
      <ProfileItem>
        <Avatar><img alt='avatar' src={avatar} /></Avatar>
        <ProfileText>
        <ProfileNameWrapper>Profile Name</ProfileNameWrapper>
        <TextWrapper>Personal</TextWrapper>
        <TextWrapper>Email@email.com</TextWrapper>
        </ProfileText>
      </ProfileItem>
    <Label>Your accounts</Label>
        <ProfileListItem>Add account</ProfileListItem>
        <ProfileListItem>Convert to business</ProfileListItem>
        <br />
    <Label>More options</Label>
        <ProfileListItem>Settings</ProfileListItem>
        <ProfileListItem>Tune your home feed</ProfileListItem>
        <ProfileListItem>Install the Windows app</ProfileListItem>
        <ProfileListItem>Your privacy right</ProfileListItem>
        <ProfileListItem>Get help 
            <OutwardArrow sx={{ fontSize: "18px" }}/>
        </ProfileListItem>
        <ProfileListItem>See terms of service 
            <OutwardArrow sx={{ fontSize: "18px" }}/>
        </ProfileListItem>
        <ProfileListItem>See privacy policy 
            <OutwardArrow sx={{ fontSize: "18px" }}/>
        </ProfileListItem>
        <ProfileListItem>Be a beta tester 
            <OutwardArrow sx={{ fontSize: "18px" }}/>
        </ProfileListItem>
        <ProfileListItem>Log out</ProfileListItem>
    </ProfileDropDownList>
    </ProfileDropDownContainer> 
  )
}

export {CreateDropdown, ProfileDropdown, NotifDropdown, SelectMobileDropdown};

const DropDownContainer = styled.div`
    position: absolute;
    top: 55px;
    box-sizing: border-box;
    z-index: 10;
`

const CreateDropDownContainer = styled(DropDownContainer)`
    width: 175px;
`
const SelectDropDownContainer = styled(DropDownContainer)`
  width: 175px;
  line-height: 0;
`
const NotifDropdownContainer = styled(DropDownContainer)`
    width: 200px;
    background: white;
    border-radius: 12px;
    height: 400px;
`
const ProfileDropDownContainer = styled(DropDownContainer)`
    top: 40px;
    left: -255px;
    width: 315px;
    border-radius: 18px;
`
const DropDownList = styled.ul`
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 1px 1px rgba(225, 225, 225);
    border-radius: 12px;
    color: black;
    font-weight: 600;
    padding: 10px;
`
const ProfileDropDownList = styled(DropDownList)`
  height: 562px;
  overflow-y: scroll;
  border-radius: 18px;
`
const ListItem = styled("li")`
  list-style: none;
  border-radius: 8px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  &:hover{
    background-color: rgba(238, 238, 238);
  }
`;
const ProfileListItem = styled(ListItem)`
  font-size: 17px;
  font-weight: 550;
  text-align: left;
  justify-content: space-between;
  &:hover{
    outline: none;
  }
`;
const ProfileItem = styled(ListItem)`
  height: 76px;
  padding: 5px;
  display: inline-block;
  align-items: center;
  width: 100%;
`;
const Avatar = styled.div`
  float: left;
  height: 100%;
  width: 75px;
  img {
    height: 66px;
    border-radius: 50%;
  }
`;
const ProfileText = styled.div`
  text-align: left;
`;
const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 200;
`;
const ProfileNameWrapper = styled(TextWrapper)`
    font-size: 18px;
    font-weight: 500;
`;
const Label = styled('p')`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  padding-left: 5px;
  padding: 5px;
`;