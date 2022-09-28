import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFile, faNewspaper } from '@fortawesome/free-regular-svg-icons';

import React, { Component } from 'react';
import Select from 'react-select'


class PipelineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pipelineList: [
                {
                    icon: faNewspaper,
                    name: "Ingest Health Risk Profile",
                    status: "In Review",
                    type: "Standard",
                    category: "Sales_Master_Data_Customer",
                    tags: ["Healthcare", "Insurance", "Finance"]
                },
                {
                    icon: faEnvelope,
                    name: "Ingest order data",
                    status: "Drafts",
                    type: "Bulk Data Pipeline",
                    category: "Sales_Master_Data_Production",
                    tags: ["Banking", "Finance", "Insurance", "Healthcare"]
                },
                {
                    icon: faFile,
                    name: "Average House Rent Prediction",
                    status: "Checked out",
                    type: "Producer Channel",
                    category: "Sales_Master_Data_Web",
                    tags: ["Fashion", "Beauty", "Healthcare", "Insurance", "Finance"]
                },
                {
                    icon: faNewspaper,
                    name: "Life Span Prediction",
                    status: "Published",
                    type: "Consumer Stream",
                    category: "Marketing_Leads_Pipeline",
                    tags: ["Profession", "Hr", "Finance"]
                },
                {
                    icon: faEnvelope,
                    name: "Aliquet dolor sem in convallis",
                    status: "Drafts",
                    type: "Standard",
                    category: "Sales_Transactional_Data_Invoice",
                    tags: ["Healthcare", "Insurance", "Finance"]
                }
            ],
            filterOptions: {
                status: [
                    { value: 'all', label: 'All Statuses' },
                    { value: 'in review', label: 'In Review' }
                ],
                types: [
                    { value: 'all', label: 'All Types' },
                    { value: 'standard', label: 'Standard' }
                ],
                categories: [
                    { value: 'all', label: 'All Categories' },
                    { value: 'Sales_Master_Data_Web', label: 'Sales_Master_Data_Web' }
                ],
            }
        }
    }
    render() {
        const { pipelineList, filterOptions } = this.state;
        return (
            <div className='pipeline'>
                <div className='pipeline-filters'>
                    <Select value={filterOptions.status[0]} options={filterOptions.status} className='filter' />
                    <Select value={filterOptions.types[0]} options={filterOptions.types} className='filter' />
                    <Select value={filterOptions.categories[0]} options={filterOptions.categories} className='filter' />
                    <div className='search'>
                        <button>
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        </button>
                        <input type={'text'} placeholder={'Search by name and tags'}></input>
                    </div>
                </div>
                <table className='pipeline-table'>
                    <thead>
                        <th>Name and Status</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Tags</th>
                    </thead>
                    <tbody>
                        {pipelineList.map((item, index) => (
                            <tr key={index}>
                                <td className='pipeline-title'>
                                    <FontAwesomeIcon icon={item.icon} size='2x' className='pipeline-icon' />
                                    <div className='pipeline-name'>
                                        <span>{item.name}</span>
                                        <span className='pipeline-status'>{item.status}</span>
                                    </div>
                                </td>
                                <td>{item.type}</td>
                                <td>{item.category}</td>
                                { item.tags.length > 2
                                    ? <td className='pipeline-tags'>
                                        <span>{ item.tags[0] + ', ' + item.tags[1] }</span>
                                        <span className='primary'>{ '+' + (item.tags.length - 2) + ' More'}</span>
                                    </td>
                                    : <td>
                                        <span>{ item.tags[0] + ', ' + item.tags[1] }</span>
                                    </td>
                                }
                                <td>{item.tages}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PipelineContainer;