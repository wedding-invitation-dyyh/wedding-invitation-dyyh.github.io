import styled from "@emotion/styled";
import { Caption, PointTitle } from "@/components/Text.tsx";
import { ILocationInfo } from "@/types/data.ts";

interface LocationInfoProps{
  location: ILocationInfo[];
}

const Address = ({location}: LocationInfoProps) => {
  return (
    <WayWrapper>
      {location?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>📍{title}</PointTitle>
            <Caption>{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
