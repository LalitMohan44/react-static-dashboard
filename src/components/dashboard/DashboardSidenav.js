import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faInfinity, faSitemap, faNetworkWired, faGrip } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faNewspaper } from '@fortawesome/free-regular-svg-icons';

import React, { Component } from 'react';

class DashboardSidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenavOptions: [
                {
                    icon: faGrip,
                    title: "Dashboard",
                    active: false
                },
                {
                    icon: faInfinity,
                    title: "Pipelines",
                    active: true
                },
                {
                    icon: faNetworkWired,
                    title: "Connections"
                },
                {
                    icon: faTable,
                    title: "Datasets"
                },
                {
                    icon: faNewspaper,
                    title: "Recipes"
                },
                {
                    icon: faSitemap,
                    rotation: 270,
                    title: "AI/ML Models"
                },
                {
                    icon: faCalendar,
                    title: "Schedules"
                }
            ]
        }
    }
    render() {
        const {sidenavOptions} = this.state;
        return (
            <div className='dashboard-sidenav'>
                {sidenavOptions.map((item, index) => (
                    <div key={index} className={item.active ? 'sidenav-item-active ' : 'sidenav-item'}>
                        <FontAwesomeIcon icon={item.icon} size='2x' rotation={item.rotation} className='sidenav-icon' />
                        <div className='sidenav-label'>
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default DashboardSidenav;