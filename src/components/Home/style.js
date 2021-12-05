import styled from 'styled-components';
import img from '../../assets/img/Rectangle.jpg'

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const HomePage = styled.div`    
    width:100%;
    height: 100%;
    border-radius:15px;
    background-image: linear-gradient(to right,#08369975,#e6e7ee04);
    position: relative;    
    box-shadow: -5px -5px 8px #FFFFFF, 5px 5px 8px rgba(13, 39, 80, 0.16);
    filter: drop-shadow(-5px -5px 8px #FFFFFF) drop-shadow(5px 5px 8px rgba(13, 39, 80, 0.16));
    animation-name: example;
    animation-duration: 5s;
    @keyframes example {
        0% {
            right:50vw;
        }
        100% {right:0;        
        }
    }

`
export const HomePageFon = styled.div`
    background-image: url(${img});
    width: 80%;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 50px auto;
    border-radius:15px;
    @media (max-width: 1000px) {
        background-position: right;
    }
`
export const ContainerPage = styled.div`
    width:70%;
    margin: 0 auto;
    padding:100px 0;
    display: flex;
`
export const Text = styled.div`
    color:white;
    width:40%;
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 1100px) {
        width: 70%;
    }
    @media (max-width: 1000px) {
        width: 100%;
    } 
`
export const Lorem = styled.p`
    font-family: 'Times New Roman', Times, serif;
    margin:50px 0;
`
export const Search = styled.div`
    display:flex;
`
export const Input = styled.input`
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    overflow: none;
    border:none;
    width:70%;
    padding: 0 10px;
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    outline: none;
    :hover{
        box-shadow: 0px 0px 2px white;
    }
    @media (max-width: 1000px) {
        width: 80%;
    }
`
export const Button = styled.button`
    background:#2D4CC8;
    color:white;
    overflow: hidden;
    border:none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding:8px 5px;
    font-size: 12px;
    :hover{
        box-shadow: 0px 0px 5px #2D4CC8;
    }
`
