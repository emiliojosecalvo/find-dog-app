import React, { Component } from 'react';
import './DogList.css'

export class DogList extends Component {
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        {this.props.dogs.map(d => (
                            <div className='DogList-Dog col-sm-6 col-lg-4 text-center' key={d.name}>
                                <img src={d.src} alt={d.name} />
                                <h4>{d.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default DogList;

