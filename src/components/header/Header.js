import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faBell, faHardDrive } from '@fortawesome/free-regular-svg-icons';
import userImage from '../../assets/images/user.png'

import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='app-header'>
                <div className='app-logo'>
                    <h2 className='primary'> MY</h2>
                    <h2 className='secondary'> LOGO</h2>
                </div>
                <div className='header-options'>
                    <div className='option-item'>
                        <FontAwesomeIcon icon={faSearch} className='item-icon'></FontAwesomeIcon>
                    </div>
                    <div className='option-item'>
                        <FontAwesomeIcon icon={faHardDrive} className='item-icon' rotation={180}></FontAwesomeIcon>
                        <span className='item-text'>Designer</span>
                    </div>
                    <div className='option-item'>
                        <FontAwesomeIcon icon={faCirclePlus} className='item-icon'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBell} className='item-icon'></FontAwesomeIcon>
                        <div className='user'>
                            <img src={userImage}className='user-img'></img>
                            <span className='item-text'>Hi, James John</span>
                        </div>
                        <FontAwesomeIcon icon={faBars} className='item-icon'></FontAwesomeIcon>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;