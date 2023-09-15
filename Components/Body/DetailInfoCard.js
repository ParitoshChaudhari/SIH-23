import React from 'react';
import Meter from '@/Components/Body/Meter'


const DetailsInfoCard = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 bg-gray-200 p-4 meter-container">
          <h2 className="text-2xl font-bold">AQI Meter</h2>
          <Meter />
        </div>
        <div className="col-span-2 lg:col-span-1 bg-gray-200 p-4 meter-container">
          <h2 className="text-2xl font-bold">WQI Meter</h2>
          <Meter />
        </div>

        <div className="col-span-2 lg:col-span-1 bg-gray-300 p-4 info-container">
          <h2 className="text-xl font-bold">AQI Readings</h2>
        </div>

        <div className="col-span-2 lg:col-span-1 bg-gray-300 p-4 info-container">
          <h2 className="text-xl font-bold">WQI Readings</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfoCard;
