import React from 'react'
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import { useSelector } from 'react-redux';
import HoaxFeed from '../components/HoaxFeed';

export const HomePage = () => {
    const { isLoggedIn } = useSelector(store => ({isLoggedIn: store.isLoggedIn}));

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {isLoggedIn && (
                        <div className="mb-1">
                            <HoaxSubmit></HoaxSubmit>
                        </div>
                    )}
                    <HoaxFeed></HoaxFeed>
                </div>
                <div className="col">
                    <UserList></UserList>
                </div>
            </div>
            
        </div>
    )
}
