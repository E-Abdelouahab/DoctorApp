import react from 'react';
import BusinessInfoCard from './BusinessInfoCard/BusinessInfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        icon: faClock,
        title:'Opening Hours',
        description: 'Lundi -- Vendredi (09:00 - 18:00)',
        background:'primary'
    },
    {
        icon: faMapMarkerAlt,
        title:'Your Location',
        description: '10 Lot rue Moulay Rachid , Benguerir',
        background:'dark'
    },
    {
        icon: faPhoneVolume,
        title:'Contact us now',
        description: '+212697405100',
        background:'primary'
    }
]

const BusinessInfo=()=>{



    return(
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info=><BusinessInfoCard info={info}></BusinessInfoCard>)
            }
            </div>
        </section>
    )
}

export default BusinessInfo;
