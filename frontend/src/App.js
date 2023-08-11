import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import Plan from './components/Plan';
import StripeContainer from './components/StripeContainer';
import Cookies from 'js-cookie';
import ProtectedRoute from './components/utils/ProtectedRoute';

function App() {
  const session = localStorage.getItem('token')
  const navigate = useNavigate();
  if(!session){
    navigate('/login');
  }
  console.log(session)
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
        <Route path="/payment" element={<ProtectedRoute><StripeContainer />
        </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
