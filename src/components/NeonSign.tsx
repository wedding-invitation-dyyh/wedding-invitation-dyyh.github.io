import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const neonFlicker = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #ff00ff,
      0 0 20px #ff00ff,
      0 0 35px #ff00ff,
      0 0 40px #ff00ff;
  }
  50% {
    opacity: 0.8;
    text-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 8px #ff00ff,
      0 0 12px #ff00ff,
      0 0 18px #ff00ff,
      0 0 25px #ff00ff;
  }
`;

const colorShift = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(90deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
`;

const NeonSignText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  animation: ${neonFlicker} 2s ease-in-out infinite, ${colorShift} 4s ease-in-out infinite;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #ff00ff,
    0 0 20px #ff00ff,
    0 0 35px #ff00ff,
    0 0 40px #ff00ff;
  letter-spacing: 2px;
  white-space: pre-line;
`;

interface NeonSignProps {
  text: string;
}

const NeonSign = ({ text }: NeonSignProps) => {
  return <NeonSignText>{text}</NeonSignText>;
};

export default NeonSign;

