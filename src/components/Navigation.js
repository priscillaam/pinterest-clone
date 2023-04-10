import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import PinterestIcon from '@mui/icons-material/Pinterest'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/SearchSharp'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SmsIcon from '@mui/icons-material/Sms'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {CreateDropdown, ProfileDropdown} from './Dropdown'
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navigation.css'

function Navigation(props) {
    const [input, setInput] = useState("");
    const [mobile, setMobile] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const dropDownRef = useRef(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const [homeActive, setHomeActive] = useState(true);
    const [todayActive, setTodayActive] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setMobile(true)
        } else {
            setMobile(false)
        }
      }
    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    }, []);

    const createToggle = (e) => {
        setCreateOpen(!createOpen);
        e.preventDefault();
    }
    const profileToggle = (e) => {
        setProfileOpen(!profileOpen);
        e.preventDefault();
    }

    //this use effect was programmed with the assistance of AI
    useEffect(() => {
        function handleClickOutside(e) {
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setCreateOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropDownRef]);

    useEffect(() => {
        function handleClickOutside(e) {
            if(profileRef.current && !profileRef.current.contains(e.target)){
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileRef]);

    // const history = createBrowserHistory({forceRefresh:true});
    
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setHomeActive(false); 
    setTodayActive(false);
    props.onSubmit(input);
    navigate("/search"); 
    // onSearch(e);
  };

  return (
    <Wrapper>
         {!mobile ? (<>
         <LogoWrapper>
            <IconButton>
                <PinterestIcon />
            </IconButton>
        </LogoWrapper>
        <HomeButton onClick={() => {setHomeActive(true); setTodayActive(false)}} id={homeActive === true ? 'active' : ''}>
            <Link to="/">Home</Link>
        </HomeButton>
        <TodayButton onClick={() => {setHomeActive(false); setTodayActive(true)}} id={todayActive === true ? 'active' : ''}>
            <Link to="/today">Today</Link>
        </TodayButton>
        <CreateButton onClick={(e) => {createToggle(e)}} ref={dropDownRef}>
            <Link>Create</Link>
            <ExpandMoreIcon />
            {createOpen && (<CreateDropdown />)}
        </CreateButton>
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <form>
                    <input type='text' placeholder="Search" onChange={(e) => console.log(setInput(e.target.value))} />
                    <button type='submit' onClick={(handleSubmit)}></button>
                </form>
            </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
            <IconButton>
                <NotificationsIcon sx={{ fontSize: "30px" }}/>
            </IconButton>
            <IconButton>
                <SmsIcon  sx={{ fontSize: "25px" }}/>
            </IconButton>
            <IconButton>
                <AccountCircleIcon sx={{ fontSize: "25px" }}/>
            </IconButton>
            <IconButton onClick={(e) => {profileToggle(e)}} ref={profileRef}>
                <ExpandMoreIcon />
                {profileOpen && (<ProfileDropdown />)}
            </IconButton>
        </IconsWrapper>
        </>) : (
            <>
            <div>Temporary Nav</div>
            </>
        )
        }
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
    cursor: pointer;
    a {
        font-weight: 500;
        text-decoration: none;
    }
`

const HomeButton = styled(HomePageButtons)`
    background-color: white;
    a {
        color: black;
    }
`
const TodayButton = styled(HomePageButtons)`
    margin-right: 15px;
    background-color: white;
    a {
        color: black;
    }
`
const CreateButton = styled(HomePageButtons)`
    margin-right: 20px;
    position: relative;
    background-color: white;
    a {
        color: black;
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
    margin-right: 20px;
    .MuiSvgIcon-root {
        color: #6a6c6e;
    }
`