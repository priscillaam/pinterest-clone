import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import PinterestIcon from '@mui/icons-material/Pinterest'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/SearchSharp'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SmsIcon from '@mui/icons-material/Sms'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Navigation() {
  return (
    <Wrapper>
         <LogoWrapper>
            <IconButton>
                <PinterestIcon />
            </IconButton>
        </LogoWrapper> 
        <HomeButton>
            <a href="/">Home</a>
        </HomeButton>
        <TodayButton>
            <a href="/">Today</a>
        </TodayButton>
        <CreateButton>
            <a href="/">Create</a>
            <ExpandMoreIcon />
        </CreateButton>
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <form>
                    <input type='text' placeholder="Search" />
                    <button type='submit'></button>
                </form>
            </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <SmsIcon />
            </IconButton>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </IconsWrapper>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.div `
    display: flex; 
    align-items: center; 
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`
const HomePageButtons = styled.div`
    display: flex; 
    height: 48px; 
    min-width: 75px;
    align-items: center; 
    justify-content: center; 
    border-radius: 24px;
    curson: pointer;
    a {
        text-decoration: none; 
        font-weight: 500;
    }
`

const HomeButton = styled(HomePageButtons)` 
    background-color: rgb(17, 17, 17);
    a {
        color: white;
    }
`
const TodayButton = styled(HomePageButtons)`
    background-color: white;
    margin-right: 15px;
    a {
        color: black;
    }
`
const CreateButton = styled(HomePageButtons)`
    background-color: white;
    margin-right: 20px;
    a { 
        color: balck;
        margin-right: 3px;
    }
`
const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex; 
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    
    form {
        display: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent; 
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input: focus {
        outline: none;
    }
`
const IconsWrapper = styled.div`
    margin-left: 20px;

    .MuiSvgIcon-root {
        color: #3d3d3d;
    }
`