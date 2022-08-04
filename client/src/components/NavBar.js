import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory()

    const logOut = ()=>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style = {{color:'white', textDecoration: 'none'}} to = {SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style = {{color:'white'}}>
                        <Button style={{marginRight: "15px"}} variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={()=>logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style = {{color:'white'}}>
                        <Button variant={"outline-light"} onClick={()=>history.push(LOGIN_ROUTE)} >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
