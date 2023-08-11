import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import Plan from './components/Plan';
import StripeContainer from './components/StripeContainer';
import Cookies from 'js-cookie';
import ProtectedRoute from './components/utils/ProtectedRoute';
import {Toaster} from 'react-hot-toast'
function App() {
  const session = localStorage.getItem('token')
  const navigate = useNavigate();
  return (
    <div className="App bg-[#1e4d91] min-h-screen">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home activePlan={true} />
        </ProtectedRoute> } />
        <Route path="/register" element={<Auth type ={'register'} />} />
        <Route path="/login" element={<Auth type ={'login'}/>} />
        <Route path="/plan" element={<ProtectedRoute>
          <Plan />
        </ProtectedRoute>} />
        <Route path="/payment" element={<StripeContainer />
      } />
      </Routes>
      <div><Toaster/></div>
    </div>
  );
}

export default App;
