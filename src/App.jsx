import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import LayoutLoaders from "./components/layout/Loaders"
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Group = lazy(() => import('./pages/Group'));
const NotFound= lazy(()=>import('./pages/NotFound'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
let user=true;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoaders/>}>
        <Routes>
          <Route  element={<ProtectRoute user={user} />} >
          <Route path="/" element={<Home />}>
      <Route path="chat/:chatId" element={<Chat />} />
    </Route>
          <Route path="/group" element={<Group />} />

          </Route>

          <Route path="/login" element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
            }
            
            />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />  

          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
