import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Repository from './pages/Repository';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}