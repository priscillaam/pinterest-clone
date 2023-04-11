import React from 'react';
import styled from 'styled-components';
import OutwardArrow from '@mui/icons-material/NorthEast';


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

function ProfileDropdown() {
  return (
    <ProfileDropDownContainer >
    <ProfileDropDownList>
    <Label>Currently in</Label>
    <h1>Profile</h1>
    <br/>
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

export {CreateDropdown, ProfileDropdown};

const DropDownContainer = styled.div`
    position: absolute;
    top: 55px;
    box-sizing: border-box;
    z-index: 10;
`

const CreateDropDownContainer = styled(DropDownContainer)`
    width: 175px;
`
const ProfileDropDownContainer = styled(DropDownContainer)`
    top: 40px;
    left: -225px;
    width: 285px;
    // height: 700px;
    // overflow: hidden;
    // overflow-y: scroll;
    // overflow: scroll;
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
  height: 36px;
  text-align: left;
  justify-content: space-between;
  &:hover{
    outline: none;
  }
`;

const Label = styled('p')`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  padding-left: 5px;
  padding: 5px;
`;