import React from 'react'
import styled from 'styled-components'
import OutwardArrow from '@mui/icons-material/NorthEast';
import FileUpload from '@mui/icons-material/FileUploadOutlined';
import MoreHorizontal from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

function Pin() {
    return (
      <Wrapper>
        <Container>
            <SaveButton>
                Save
            </SaveButton>
            <LinkButton>
                <OutwardArrow sx={{ fontSize: "15px" }}/>
                <a>link...</a>
            </LinkButton>
            <ShareButton>
                <FileUpload sx={{ fontSize: "18px" }}/>
            </ShareButton>
            <MoreButton>
                <MoreHorizontal sx={{ fontSize: "18px" }}/>
            </MoreButton>
            <img src='https://i.pinimg.com/564x/9e/01/55/9e0155e6863cf3965c93898bd1200026.jpg' />
        </Container>
      </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    img {
        display: block; 
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover; 
    }
`
const SaveButton = styled.div`
    display: none; 
    height: 48px; 
    min-width: 65px;
    align-items: center; 
    justify-content: center; 
    border-radius: 24px;
    cursor: pointer;
    background-color: #e60023;
    color: white;
    font-weight: 600;

    :hover {
        background-color: #C0112D;
    }

    ${Container}: hover & {
        display: flex;
        position: absolute;
        transform: translateX(250%) translateY(-365%);
    }
`
const LinkButton = styled.div`
    display: none; 
    height: 32px; 
    max-width: 100%;
    align-items: center; 
    padding: 0 15px 0 8px;
    border-radius: 24px;
    cursor: pointer;
    background-color: #e1e1e1;
    color: black;
    font-weight: 600;
    font-size: 15px;

    :hover {
        background-color: #f0f0f0;
    }

    a {
        margin-left: 5px;
    }
    ${Container}: hover & {
        display: flex;
        position: absolute;
        transform: translateX(10%) translateY(575%);
    }
`
const SelectButton = styled.div`
    display: none; 
    height: 32px; 
    min-width: auto;
    align-items: center; 
    justify-content: center;
    padding: 0 8px 0 8px;
    border-radius: 32px;
    cursor: pointer;
    background-color: #e1e1e1;
    color: black;

    :hover {
        background-color: #f0f0f0;
    }
    ${Container}: hover & {
        display: flex;
        position: absolute;
    }
`
const ShareButton = styled(SelectButton)`
    ${Container}: hover & {
        transform: translateX(450%) translateY(575%);
    }
`
const MoreButton = styled(SelectButton)`
    ${Container}: hover & {
        transform: translateX(570%) translateY(575%);
    }
`