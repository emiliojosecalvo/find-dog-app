import React, { Component } from 'react';
import './DogList.css'

export class DogList extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <h3 className='display-1'>
                        DOG HERE
                        <small className="text-muted"> app</small>
                    </h3>
                    {this.props.dogs.map(d => (
                        <div className='DogList-Dog col-4 text-center' key={d.name}>
                            <img src={d.src} alt={d.name} />
                            <h4>{d.name}</h4>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default DogList;

