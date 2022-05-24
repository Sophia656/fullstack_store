import React from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                    />
                    <Row className="mt-3 pr-3 pl-3">
                        {isLogin
                        ?
                        <div style={{marginBottom: '1vh'}}>
                            Нет аккаунта?
                            <NavLink style={{textDecoration: 'none'}} to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink>
                        </div>
                        :
                        <div style={{marginBottom: '1vh'}}>
                            Есть аккаунт?
                            <NavLink style={{textDecoration: 'none'}} to={LOGIN_ROUTE}> Войдите!</NavLink>
                        </div>
                        }
                        <Button variant={'outline-dark'}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;