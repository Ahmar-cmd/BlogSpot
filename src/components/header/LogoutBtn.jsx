import React from 'react';
import authService from '../../appwrite/auth';
import {useDispatch} from 'react-redux'
import { logout } from '../../store/authSlice';

function LogoutBtn () {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

        return (
        <button 
         onClick={logoutHandler}
         className='inline-block px-6 py-2 bg-slate-900 text-white rounded-xl hover:scale-105 duration-300'
        > 
          Logout
        </button>
        );
    }

export default LogoutBtn;