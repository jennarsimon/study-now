import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar purple-background white-text'>
                <h1 className='logo'>StudyNow</h1>
                <ul className='nav-options'>
                    <li>About Us</li>
                    <l1>Sign Up</l1>
                </ul>
            </div>
        );
    }
}