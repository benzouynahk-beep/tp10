import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if(password !== confirmPassword){
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    dispatch(register({ nom, prenom, username, email, password }));
    navigate('/login');
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
    background: 'linear-gradient(90deg, #000000ff, #3f1764ff)',
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
    color: '#0b0b0bff'
  };

  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Inscription</h2>
      <input style={inputStyle} placeholder="Nom" value={nom} onChange={e=>setNom(e.target.value)} />
      <input style={inputStyle} placeholder="Prenom" value={prenom} onChange={e=>setPrenom(e.target.value)} />
      <input style={inputStyle} placeholder="Nom utilisateur" value={username} onChange={e=>setUsername(e.target.value)} />
      <input style={inputStyle} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input style={inputStyle} placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <input style={inputStyle} placeholder="Confirmation mot de passe" type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
      <button 
        style={buttonStyle} 
        onClick={handleSignup} 
        onMouseEnter={buttonHover} 
        onMouseLeave={buttonLeave}
      >
        S'inscrire
      </button>
    </div>
  );
}

export default Signup;