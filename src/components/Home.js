import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h3 className='text-5xl mt-10'>Welcome! {user?.displayName}</h3>
        </div>
    );
};

export default Home;