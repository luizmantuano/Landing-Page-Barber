import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyARc1sjF_XjfTWG9Wk8frwv99DIscNRGWg',
  });
  return (
    <div className='w-screen h-[412px] mt-[48px]'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -22.910931,
            lng: -43.188129,
          }}
          zoom={13}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
