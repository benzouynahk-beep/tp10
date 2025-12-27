import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(username, password));
    navigate('/');
  }

  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, Helvetica, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(90deg, #4f46e5, #9333ea)',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease'
  };

  const buttonHover = e => {
    e.target.style.transform = 'scale(1.05)';
  };

  const buttonLeave = e => {
    e.target.style.transform = 'scale(1)';
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#4f46e5'
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '15px',
    color: '#1976d2',
    textDecoration: 'none',
    fontSize: '14px'
  };

  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Connexion</h2>
      <input style={inputStyle} placeholder="Nom utilisateur" value={username} onChange={e=>setUsername(e.target.value)} />
      <input style={inputStyle} placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button 
        style={buttonStyle} 
        onClick={handleLogin} 
        onMouseEnter={buttonHover} 
        onMouseLeave={buttonLeave}
      >
        Se connecter
      </button>
      <Link style={linkStyle} to="/register">
        Si vous n’êtes pas inscrit, inscrivez-vous maintenant !!!
      </Link>
    </div>
  );
}

export default Login;