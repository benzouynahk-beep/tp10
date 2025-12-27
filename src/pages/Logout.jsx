import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(logout());
    navigate('/login');
  }, [dispatch, navigate]);

  return null;
}

export default Logout;