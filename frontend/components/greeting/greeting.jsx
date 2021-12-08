import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks = () => (
        

         <nav className="sign-reg-modal">
             <div className="links-nav">
                <input className="sign-in-sign-put-top-nav" type="submit" onClick={() => openModal({ type: 'login'})} value="Sign In"/>
                <i id="shopping-cart" className="fas fa-shopping-cart" onClick={() => openModal({ type: 'login'})}></i>  
            </div>
        </nav>
    );

    const personalGreeting = () => (
        <div className="links-nav">
            <Link to={`/users/${currentUser.id}`}><i id="profile-icon" className="fas fa-user-circle"></i></Link>
            <Link to="/" id="link-sign-out" onClick={logout}>Sign out</Link>
            <Link to={`/cart/${currentUser.current_order}`}><i id="shopping-cart" className="fas fa-shopping-cart"></i></Link>     
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
