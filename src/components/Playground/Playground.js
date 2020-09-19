import React from 'react';
import ReactiveButton from 'reactive-button';
import './Playground.scss';

const Playground = () => {
    return (
        <div className="playground-component-wrapper">
            <div className="flex-section p-5 border bg-dark">
                <div className="item">
                    <ReactiveButton/>
                </div>
            </div>
            <div className="flex-section mt-2 border">
                <div className="item">


lorem lorem

                </div>
            </div>
        </div>
    );
};

export default Playground;