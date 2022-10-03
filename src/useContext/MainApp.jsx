import { Routes, Route, Navigate } from 'react-router-dom';

import  { UserProvider } from './context/UserProvider';
import { HomePage, LoginPage, AboutPage, NavBar } from './';

export const MainApp = () => {
    return ( 
        <UserProvider>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="about" element={ <AboutPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </UserProvider>
    );
}