import React, { Component } from 'react';
import PipelineContainer from './Pipeline/PipelineContainer';

class DashboardContent extends Component {
    render() {
        return (
            <div className='dashboard-content'>
                <PipelineContainer />
            </div>
        );
    }
}

export default DashboardContent;