import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Context } from '..';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.element} exact />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.element} exact />
            )}
            <Route path='/*' element={<Shop />} />
        </Routes>
    );
};

export default AppRouter;