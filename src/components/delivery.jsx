import React from 'react';
import Card from './Card';
import mapIcon from '../assets/map-icon.png';
import { Link } from 'react-router-dom';

const Delivery = ({ delivery }) => {
    return (
        <Card key={delivery.id}>
            <img src={delivery.imageSrc} className="h-32 shadow-xl sm:h-48 w-full object-cover rounded-xl" />
            <div className="m-4 border-t pt-2">
                <span className="font-bold">{delivery.title}</span>
                <span className="block text-gray-500 text-sm">{delivery.location}</span>
            </div>
            <div className="ml-4 flex">
            <svg className="block mr-2 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{delivery.time}</span>
            </div>
            <div className="ml-4 border-b flex">
                <img src={mapIcon} className="h-5 sm:48 w-5 object-cover rounded-xl" />
                <span className='ml-2 mb-3'>{delivery.address}</span>
            </div>
            <div>
                <Link
                    to={`orders/${delivery.id}`}
                    className="block text-center text-red-600 border-red-600 border-2 bg-white ml-1 mt-3 rounded-xl py-2 px-4 font-semibold shadow-xl hover:bg-red-600 hover:text-white transition ease-out duration-500"
                >
                    Accept
                </Link>
            </div>
        </Card>
    );
}

export default Delivery;