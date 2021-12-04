import styled, { css } from 'styled-components';

const Button = styled.button`
    display: ${ props => props.visible === '' ? 'none' : 'inline-block' };
    width: 4rem;
    height: 4rem;
    font-size: 1rem;
    background: #091921;
    border-radius: 50%;
    color: #6f6f6f;
    box-shadow: -1px -1px 3px rgba(255, 255, 255, .1), 2px 2px 6px rgba(0,0,0,.8);
    transition: all .3s;
    cursor: pointer;

    &:hover {
        color: #00fff1;
        box-shadow: inset -2px -22px 10pg rgba(255, 255, 255, .05), inset 2px 2px 10px rgba(0, 0, 0, 1);
        text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
    }
`

export default Button;