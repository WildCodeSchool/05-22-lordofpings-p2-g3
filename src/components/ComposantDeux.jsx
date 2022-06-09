// import React from 'react'
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';


// const ComposantDeux = () => {

//   const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };

//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };


//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: "AIzaSyDrWde6omFP3Cmg11zOEmLNb0gTElCXQUA"
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//       const bounds = new window.google.maps.LatLngBounds(center);
//       map.fitBounds(bounds);
//       setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])



//     return(
//       <>

//         <h1>Composant Deux incrustation dans Composant MAIN</h1>

//         {isLoaded ? (<GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           { /* Child components, such as markers, info windows, etc. */}
//           <></>
//         </GoogleMap>
//         ) : <></>}


//       </>
//     )


  
// }

// export default ComposantDeux