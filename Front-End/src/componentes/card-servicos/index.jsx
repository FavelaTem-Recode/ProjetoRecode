import React from 'react';
import './style.css';

const CardServicos = () => {
    return (
        <div className="cardServicos">
            <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header bg-transparent border-dark">Header</div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer bg-transparent border-dark">Footer</div>
            </div>

        </div>
    )
};

export default CardServicos;