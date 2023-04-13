import React from 'react'
import styled from 'styled-components'
import OutwardArrow from '@mui/icons-material/NorthEast';
import FileUpload from '@mui/icons-material/FileUploadOutlined';
import MoreHorizontal from '@mui/icons-material/MoreHoriz';

function Pin(props) {

    let {urls} = props;
    return (
      <Wrapper>
        <Container>
            {!props.profilePin && <SaveButton>
                Save
            </SaveButton>}
            <LinkButton>
                <OutwardArrow sx={{ fontSize: "15px" }}/>
                <a href={urls?.regular}>{urls?.regular}</a>
            </LinkButton>
            <ShareButton>
                <FileUpload sx={{ fontSize: "18px" }}/>
            </ShareButton>
            <MoreButton>
                <MoreHorizontal sx={{ fontSize: "18px" }}/>
            </MoreButton>
            <img  src={urls?.regular} alt='pin'/>
        </Container>
      </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: block;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    position: relative;
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
    :hover img{
        -webkit-filter: brightness(70%);
    }
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
        top: 10px;
        right: 10px;
        z-index: 5;
    }
`
const LinkButton = styled.div`
    display: none; 
    height: 25px; 
    width: 48%;
    text-align: center;
    justify-content: center;
    padding: 5px 8px 0 8px;
    border-radius: 24px;
    cursor: pointer;
    background-color: #e1e1e1;
    color: black;
    font-weight: 600;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
        background-color: #f0f0f0;
    }

    a {
        margin-left: 5px;
        text-decoration: none;
        color: black;
    }
    ${Container}: hover & {
        display: inline;
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 5;
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
        z-index: 5;
    }
`
const ShareButton = styled(SelectButton)`
    ${Container}: hover & {
        bottom: 10px;
        right: 50px;
        z-index: 5;
    }
`
const MoreButton = styled(SelectButton)`
    ${Container}: hover & {
        bottom: 10px;
        right: 10px;
        z-index: 5;
    }
`