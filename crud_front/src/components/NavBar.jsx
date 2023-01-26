
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header =styled(AppBar)`
    background: #660066
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 25px;
    color: inherit;
    text-decoration: none

`



const NavBar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Asif Inc</Tabs>
                <Tabs to='/all'>All User</Tabs>
                <Tabs to='/add'>Add User</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;