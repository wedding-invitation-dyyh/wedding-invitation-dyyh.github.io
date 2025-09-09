import styled from "@emotion/styled";
import Address from "./Address.tsx";
// import Map from "./Map.tsx";
import MapButtons from "./MapButtons.tsx";
import { Caption, PointTitle } from "@/components/Text.tsx";
import { IMapInfo } from "@/types/data.ts";
import Maps from "../Maps/Maps.tsx";


interface LocationProps {
  mapInfo: IMapInfo;
}

const Location = ({mapInfo}: LocationProps) => {
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={"center"}>{mapInfo.address2}</Caption>
      <Maps address={mapInfo.address2} />
      <MapButtons naverMap={mapInfo.naverMap}/>
      <Address location={mapInfo.location} />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
