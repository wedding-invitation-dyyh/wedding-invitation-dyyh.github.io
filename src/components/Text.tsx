import styled from "@emotion/styled";

export const IntroTitle = styled.p`
  font-size: 3rem;
  margin: 20px;
  white-space: pre-line;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HighlightedText = styled.span<{color:string}>`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  font-weight: bold;
  margin-right: 5px;
`;


export const Heading1 = styled.p<{color:string}>`
  font-size: 1.5rem;
  margin: 10px;
  color: ${(props) => props.color};
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  line-height: 1.5rem;
  margin: 0;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  line-height: 1.5rem;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "start")};
  white-space: pre-line;
  font-size: 14px;
`;
