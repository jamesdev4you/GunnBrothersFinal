import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddLocationAlt, LocationOn } from '@mui/icons-material';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';

const center = { lat: 27.97173, lng: -82.42262 };

export default function PriceEstimateFxn() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [distanceNumber, setDistanceNumber] = useState(0);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  function distanceToNumber(d) {
    const distanceValue = parseInt(d.replace(/[^\d\.]/g, ''));
    return distanceValue;
  }

  async function calculateRoute() {
    if (destiantionRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: center,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDistanceNumber(
      distanceToNumber(results.routes[0].legs[0].distance.text)
    );
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDistanceNumber(0);
    destiantionRef.current.value = '';
  }

  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '50vh',
          width: '30vw',
          borderRadius: '30px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '100%',
            borderRadius: '33px',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
        >
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{
              width: '100%',
              height: '100%',
              borderRadius: '30px',
            }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          sx={{
            height: '30%',
            width: '100%',
            padding: '2em 2em',
            backgroundColor: 'primary.main',
            borderTop: 'none',
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <IconButton
              sx={{ backgroundColor: 'white', color: 'primary.main' }}
              onClick={() => map.panTo(center)}
            >
              <LocationOn />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: 'white', color: 'primary.main' }}
              onClick={clearRoute}
            >
              <AddLocationAlt />
            </IconButton>
            <Autocomplete>
              <TextField
                type='text'
                placeholder='Destination'
                inputRef={destiantionRef}
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                    '& .MuiFormLabel-root': {
                      color: 'red',
                    },
                  },
                }}
                sx={{ width: '100%' }}
                variant='outlined'
                size='small'
              />
            </Autocomplete>
            <Button
              sx={{ backgroundColor: 'white' }}
              type='submit'
              onClick={calculateRoute}
            >
              Go!
            </Button>
          </Box>

          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <Typography>
              Estimate Service Cost: ${distanceNumber * 4}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
