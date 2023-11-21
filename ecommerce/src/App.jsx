import React, { useContext } from 'react';
import './styles.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './auth/pages/LoginPage';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import UserRoutes from './routes/UserRoutes';
import RegisterPage from './pages/RegisterPage';
import { UserProvider } from './context/UserProvider';
import { AuthContext } from './auth/context/AuthContext';
import { ProductProvider } from './context/ProductProvider';

const App = () => {

  const { login } = useContext(AuthContext);

  return (
    <div>
      <UserProvider>
        <ProductProvider>
          <Routes>
            {
              login.isAuth
                ?
                <Route path="/*" element={<UserRoutes />} />
                :
                <Route path="/*" element={
                  <Routes>
                    <Route element={<LoginLayout />}>
                      <Route path="login" element={<LoginPage />} />
                      <Route path="register" element={<RegisterPage />} />
                      <Route path="/*" element={<Navigate to="/login" />} />
                    </Route>
                  </Routes>
                }>

                </Route>
            }
          </Routes>
        </ProductProvider>
      </UserProvider>
    </div >
  );
};

export default App;
