import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useSAuthContext } from './hooks/useSAuthContext';
import  {Component} from 'react';

import AllProducts from './pages/AllProd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Orders from './pages/Order';
import SignUp from './pages/UserSignup';
import SSignUp from './pages/SellerSignup';
import SLogin from './pages/SLogin';
import ProdDescription from './pages/ProdDescr';
import ProdAdder from './components/prodAdder';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again.</h1>;
    }

    return this.props.children;
  }
}



function App() {
  const { user } = useAuthContext();
  const { seller } = useSAuthContext();
  return (
    <div className="App">
      <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                seller || user ? (
                  <Home />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp />} />
            <Route path="/slogin" element={seller ? <ProdAdder /> : <SLogin />} />
            <Route path="/ssignup" element={seller ? <Navigate to="/" replace /> : <SSignUp />} />
          </Routes>
        </div>
      </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
