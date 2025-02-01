import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(10, 10, 10);
    width: 100vw;
    min-height: calc(100vh - 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`

export const ToDoList = styled.div`
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 5px;
    width: 40rem;

    ul {
        padding: 0;
        margin-top: 30px;
    }
`

export const Input = styled.input`
    border: 2px solid #D1D3D466;
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    padding: 0 10px;
    width: 77.5%;
    font-size: 0.95rem;

    &:focus {
        outline: none;
        border: 2px solid #009999;
    }
`

export const Button = styled.button`
    background: #009999;
    border-radius: 5px;
    font-weight: 900;
    font-size: 1rem;
    line-height: 2px;
    height: 40px;
    padding: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? '#ccffcc' : 'none' };
    box-shadow: 1px 4px 10px 0px #00000033;
    border: none;
    border-radius: 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    text-decoration: dashed;

    li {
        list-style: none;
        text-decoration: ${ props => props.isFinished ? 'line-through' : 'none' };
    }

    div {
        display: flex;
        gap: 5px;
    }

    .btn-check, .btn-delete {
        padding: 6px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            filter: grayscale(0.3);
        }
    }

    .btn-delete {
        color: #fff;
        background-color: #FF0000;
    }

    .btn-check {
        color: #fff;
        background-color: #008000;
    }
`

export const Title = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    line-height: 0;
    margin-bottom: 50px;

    span {
        color: #009999;
    }
`