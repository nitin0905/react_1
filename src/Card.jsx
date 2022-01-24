import React from 'react';
import web from '../src/images/3.jpg';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                    <img src={props.imgsrc} className="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;