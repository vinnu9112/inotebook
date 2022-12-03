import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
import UserInfo from './UserInfo'


const AboutMe = () => {

    const context = useContext(NoteContext);
    let navigate = useNavigate();

    const {user, getUser} = context;

    useEffect(() => {
        if(localStorage.getItem('token')){
            getUser()
        }
        else{
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2 className='my-3'>User Info</h2>
            <div className="my-3">
                 <UserInfo key={user._id} user = {user}/>
            </div>
            
        </div>
    )
}

export default AboutMe
