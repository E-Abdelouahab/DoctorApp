import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Elhassnaoui</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +212697405100</p>
        </div>
    );
};

export default Doctor;