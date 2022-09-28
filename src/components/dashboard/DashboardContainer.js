import React, { Component } from 'react';
import DashboardContent from './DashboardContent';
import DashboardHeader from './DashboardHeader';
import DashboardSidenav from './DashboardSidenav';

class DashboardContainer extends Component {
    render() {
        return (
            <div className='dashboard'>
                <DashboardHeader />
                <div className='dashboard-body'>
                    <DashboardSidenav />
                    <DashboardContent />
                </div>
            </div>
        );
    }
}

export default DashboardContainer;