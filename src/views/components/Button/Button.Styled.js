import styled, {css} from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.3s;
  height: 30px;
  padding: 0 11px;
  background: #fff;
  color: #767676;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    color: #111;
  }

  &:focus {
    outline: 0;
  }

  ${props => props.sort === 'info' && css`
    background: #3cb46e;
    color: #fff!important;
  `}
  
  ${props => props.sort === 'outline' && css`
  border:1px solid #d1d1d1;
    
    &:hover{
      border-color:#111;;
    }
  `}

`;