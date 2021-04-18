import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory} from 'react-router-dom';

import {IconSearch} from "../../../icons";



const SearchBox = ({shape}) => {

    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);

    const history = useHistory();

    const onChange = (event) => {
    setValue(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/photos/${value}`)

    }

    return (
        <Container className={cn("SearchBox", shape ,{focus})}>

            <Form onSubmit={onSubmit}>
                <Button>
                    <IconSearch/>
                </Button>
                <Label>
                    <Input type="text"
                           value={value}
                           onChange={onChange}
                           onFocus ={() => setFocus(true)}
                           onBlur={() => setFocus(false)}
                           placeholder={"Search free high-resolution photos"}
                    />
                </Label>
            </Form>


        </Container>
    )
}

const Container = styled.div`
  flex: 1;

`;

const Form = styled.form`
  display: flex;
  padding: 0 14px;
  border:1px solid #eee;
  transition: 0.3s;
  &:hover{
    border-color:#aaa;
  }
  .round & {
    background:#eee;
    border-radius: 20px;
  }
  
  .round.focus &{
    background:#fff;
  }
  
  .square & {
    background:#fff;
    border-radius: 6px;
  }
`;

const Button = styled.button`
  border: 0;
  background: none;
  margin-right: 10px;
  

  &:focus {
    outline: 0;
  }

  svg {
    fill: #777;
    .round &{
      width: 20px;
    }
    .square &{
      width: 24px;
    }
    
  }

`;

const Label = styled.label`
  display: block;
  flex: 1;
  .round &{
    height: 38px;
  }
  .square &{
    height: 54px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: none;

  &:focus {
    outline: 0;
  }
`;

export default SearchBox;