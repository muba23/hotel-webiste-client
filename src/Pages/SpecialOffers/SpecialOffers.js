import React, { useEffect, useState } from 'react';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import './SpecialOffers.css'

const SpecialOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(()=>{
        fetch('')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
    },[])
    return (
        <div id="offers" className="offers-container">
            <h2 className="mb-5">Special Offers</h2>
            <div>
                {
                    offers.map(offer=> <SpecialOffer
                        key={offer.id}
                        offer={offer}
                    ></SpecialOffer>)
                }
            </div>
            
        </div>
    );
};

export default SpecialOffers;