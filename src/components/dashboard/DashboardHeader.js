import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faEllipsisV, faCirclePlus, faTable, faInfinity, faSitemap, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faNewspaper } from '@fortawesome/free-regular-svg-icons';

import React, { Component } from 'react';

class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardActions: [
                {
                    icon: faCirclePlus,
                    title: "Add"
                },
                {
                    icon: faRefresh,
                    title: "Refresh"
                },
                {
                    icon: faEllipsisV,
                    title: "More"
                }
            ],
            dashboardWidgets: [
                {
                    icon: faTable,
                    title: "Datasets",
                    count: "07",
                },
                {
                    icon: faInfinity,
                    title: "Pipelines",
                    count: "03"
                },
                {
                    icon: faNewspaper,
                    title: "Recipes",
                    count: "03"
                },
                {
                    icon: faSitemap,
                    rotation: 270,
                    title: "AI/ML Models",
                    count: "02"
                },
                {
                    icon: faCalendarCheck,
                    title: "Jobs",
                    count: "05"
                },
                {
                    icon: faNetworkWired,
                    title: "Connections",
                    count: "14"
                }
            ]
        }
    }
    render() {
        const {dashboardActions, dashboardWidgets} = this.state;
        return (
            <div className='dashboard-header'>
                <div className='dashboard-title'>
                    <span className='primary'>Projects</span>
                    <span>&nbsp;| Cognia Research and Analysis(Healthcare, Published on 4th May 2021, 07:30 pm)</span>
                    <div className='dashboard-actions'>
                        {dashboardActions.map((item, index) => (
                            <div key={index}>
                                <FontAwesomeIcon icon={item.icon} className='action-icon secondary' />
                                <span className='action-text'>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='dashboard-widgets'>
                    {dashboardWidgets.map((widget, index) => (
                        <div key={index} className='widget'>
                            <FontAwesomeIcon icon={widget.icon} size='4x' rotation={widget.rotation} className='widget-icon secondary' />
                            <div className='widget-info'>
                                <span>{widget.title}</span>
                                <span className='widget-count'>{widget.count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DashboardHeader;