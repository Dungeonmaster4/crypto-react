import styled from "styled-components";
import Select from 'react-select';
import {FaCaretDown, FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";

export const ControlWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem 1rem 3rem;
`

export const PrettySelect = styled(Select).attrs({
        styles: {
            option: (provided)=>({
                ...provided,
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                borderRadius: '10px'
                
            }),
            control: (provided)=>({
                ...provided,
                color: 'var(--color-text)',
                backgroundColor: 'var(--color-bg)',
                border: 'none',
                borderRadius: '10px'
            })
        }
    })`
    border-radius: 10px;
    box-shadow: 0px 0px 8px #555;
    width: 100px;
    height: 35px;   
    font-size: 12px;

    & > div[id] {
        background-color: var(--color-bg);
    }

    #react-select-7-listbox {
        box-shadow: 0px 0px 8px #555;
    }
    .css-qc6sy-singleValue {
        color: var(--color-text);
    }
`

export const Input = styled.input`
    height: 35px;
    width: 30%;
    border-radius: 8px;
    /* margin: 1rem 2rem auto auto; */
    border: none;
    padding-left: 1rem;
    font-weight: 700;
    color: var(--color-text);
    background-color: var(--color-bg);
    box-shadow: 0px 0px 8px #555;
    @media (max-width: 720px){
        width: 50%;
    }
    `

export const Wrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    

    @media (max-width: 720px){
        .hide-mobile {
            display: none;
        }
    }
`
export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26272b;
    box-shadow: 0px 0px 10px #111;
    border-radius: 7px;
    margin: 2rem;
    padding: 1rem;
    font-weight: 700;

    p{
        cursor: pointer;
    }
`
export const FaCaretDownT = styled(FaCaretDown)`
    transform: translateY(15%);    
`

export const MoreButton = styled.button`
width: 120px;
    border-radius: 8px;
    border: none;
    padding: .5rem;
    margin: 0 auto 1rem auto;
    font-weight: 700;
    color: var(--color-text);
    background-color: var(--color-bg);
    box-shadow: 0px 0px 8px #555;
    cursor: pointer;
`

export const Span = styled.span`
    font-size: 12px;
    margin-left: 3rem;
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    .icon {
        font-size: 2rem;
        color: var(--color-blue);
    }
    span {
        color: var(--color-blue);
    }
    `
export const Arrow = styled(FaArrowLeft)`
    color: var(--color-blue);
    font-size: 18px;
    `

export const GoHomeLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    margin: 0rem auto;
`

export const Back = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0rem;
    box-shadow: 0px 0px 12px #111;
    border-radius: 8px;
    padding: .8rem;
    
    @media (max-width: 760px){
        margin-left: 1rem;
    }
`