import { useState } from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { AddUserApi } from '../service/api';



const Container = styled(FormGroup)`
    width: 50%;
    margin: 7% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const Center = styled(Typography)`
    margin: auto;
`
const DefaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: ''
}

const AddUser = () => {

    const [user,setUser]= useState(DefaultValue);

    const onValueChange = (e) =>{
        
        setUser({...user,[e.target.name]: e.target.value})
        
    }
    const AddUserDetails = async() => {
        await AddUserApi(user);

    }
    return(
        <Container>
            <Center variant="h3">ADD USER</Center>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="first_name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="last_name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="mobile_no"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => AddUserDetails()}>Add New User</Button>
            </FormControl>
        </Container>
    )
}
export default AddUser;