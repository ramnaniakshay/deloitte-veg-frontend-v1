
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import PrivateRoute from './Component/PrivateRoute'; // Updated folder name for consistency
import NewsPage from './Pages/NewsPage';
import Logout from './Pages/Logout';
import Navbar from './Component/NavBar';
import CreatePage from './Pages/CreatePage';
import ViewPage from './Pages/ViewPage';
import DeletePage from './Pages/DeletePage';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<Logout />} /> 

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/news" element={<PrivateRoute element={<NewsPage />} />} />
        <Route path="/create" element={<PrivateRoute element={<CreatePage />} />} />
        <Route path="/view" element={<PrivateRoute element={<ViewPage />} />} />
        <Route path="/delete" element={<PrivateRoute element={<DeletePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
