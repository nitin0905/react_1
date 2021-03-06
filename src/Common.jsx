import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/1.png";



const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center my-5'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto '>
                            <div className='row '>
                                <div className='col-md-6 pe-5 pe-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column '>
                                    <h1>
                                        {props.name}<strong className='brand-name'> Rproject</strong>
                                    </h1>
                                    <h2 className='my-3'>
                                        {props.para}
                                    </h2>
                                    <div className='ms-3 '>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt='homeimg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>

    );
};

export default Common;