import { useEffect, useState } from "react";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";

interface MapProps {
  address: string;
}
const Maps = ({ address }: MapProps) => {
  const navermaps = useNavermaps();
  const [coords, setCoords] = useState<{ lat: number; lng: number }>({
    lat: 0.0,
    lng: 0.0,
  });

  useEffect(() => {
    if (!address) return;
    naver.maps.Service.geocode({ query: address }, (status, response) => {
      if (status === naver.maps.Service.Status.OK) {
        const result = response.v2.addresses[0];
        if (result) {
          setCoords({
            lat: parseFloat(result.y),
            lng: parseFloat(result.x),
          });
        }
      } else {
        console.error("Geocoding failed:", status);
      }
    });
  }, [address]);

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <NaverMap
        center={new navermaps.LatLng(coords.lat, coords.lng)}
        defaultZoom={18}
        draggable={false}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}
      >
        <Marker position={new navermaps.LatLng(coords.lat, coords.lng)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Maps;
