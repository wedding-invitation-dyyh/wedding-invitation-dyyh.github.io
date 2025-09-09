import styled from "@emotion/styled";
import Button from "@/components/Button.tsx";
interface MapButtonsProps {
  naverMap: string;
}
const MapButtons = ({naverMap}:MapButtonsProps) => {

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
