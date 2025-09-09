import styled from "@emotion/styled";
import "./Main.css";
import { useState } from "react";
import { IMain } from "@/types/data";
import { getMainImageById } from "../Gallery/Images";

interface MainProp{
  id: string;
  props : IMain
}

const MovieMain = ({id, props}: MainProp) => {
  const { title, subtitle } = props;
  const myImage = getMainImageById(id);
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <>
    {isPlaying && (
    <VideoOverlay onClick={() => setIsPlaying(false)}>
      <StyledVideo
        src={`/${id}/main.mp4`}
        autoPlay
        controls
      />
      <CloseButton onClick={() => setIsPlaying(false)}>✕</CloseButton>
    </VideoOverlay>
  )}
    <Wrapper>
      <Inner>
        <RelativeBox>
          <Thumbnail src={myImage[0].source} alt="Thumbnail" />
          <BottomOverlay>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ButtonGroup>
              <PlayButton onClick={() => setIsPlaying(true)}>▶ 재생</PlayButton>
              <WishlistButton>✚ 내가 찜한 리스트</WishlistButton>
            </ButtonGroup>
          </BottomOverlay>
        </RelativeBox>
      </Inner>
    </Wrapper>
    </>
  );
};

export default MovieMain;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(117, 117, 117, 0.8);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
  padding: 0.2em 0.5em;
`;

const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  outline: none;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: black;
  text-align: center;
  margin-bottom: 3rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: left;
`;

const RelativeBox = styled.div`
  position: relative;
`;


const Thumbnail = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const BottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  height: 20rem;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  margin: 0 1rem;
  font-size: 2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.15);
  font-style: italic;
`;

const Subtitle = styled.div`
  margin: 0 1rem;
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const ButtonGroup = styled.div`
  margin: 1rem 1rem 0;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
`;

const PlayButton = styled.button`
  width: 50%;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;

const WishlistButton = styled.button`
  width: 50%;
  background-color: rgba(209, 213, 219, 0.1);
  color: white;
  font-weight: 500;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;