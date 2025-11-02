import { useState } from "react";
import styled from "@emotion/styled";
import PhotoGallery from "./PhotoGallery.tsx";

const GalleryWrap = ({ id, color }: { id: string, color: string }) => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && (color=="white"?<WhiteGradientOverlay />:<BlackGradientOverlay/>)}
        <PhotoGallery id={id} />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1000px; /* 컨테이너 최대 너비(필요하면 조정) */
  box-sizing: border-box;
  max-height: ${(props) =>
    props.isMoreView
      ? ""
      : "60vh"}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;


const BlackGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0) 90%
  );
`;


const PlusButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;
