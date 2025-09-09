import React from "react";
import { BrideAndGroom,  } from "@/types/data.ts";
import styled from "@emotion/styled";
import { HighlightedText } from "@/components/Text.tsx";
import { useColor } from "@/context/ColorContext";

interface HostProps {
  groom: BrideAndGroom;
  bride: BrideAndGroom;
}

const Host = ({ groom, bride }: HostProps) => {
  return (
    <>
      <HostContainer>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  const { mainColor } = useColor();

  return (
    <HostDetails>
      {person.parents && (
        <ParentName>
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && " · "}
              {parent.name}
            </React.Fragment>
          ))}
        </ParentName>
      )}
      <RelationText>
        <div>의</div>
        <Relation>{person.relation}</Relation>
      </RelationText>
      <HighlightedText color={mainColor}>{person.name}</HighlightedText>
    </HostDetails>
  );
};

const ParentName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const HostContainer = styled.div`
  padding-top: 10px;
  gap: 8px;
`;

const HostDetails = styled.div`
  padding: 0 55px;
  justify-content: center;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
`;

const RelationText = styled.div`
  font-style: normal;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
`;

const Relation = styled.div`
  width: inherit;
`;
