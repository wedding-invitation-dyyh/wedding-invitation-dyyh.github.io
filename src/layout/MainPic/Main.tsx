import styled from "@emotion/styled";
import "./Main.css";
import { IMain } from "@/types/data";
import { getMainImageById } from "../Gallery/Images";

interface MainProp{
  font: string;
  id: string;
  props : IMain
}

const Main = ({font, id, props}: MainProp) => {
  const { title, eventDetail } = props;
  const myImage = getMainImageById(id);

  return (
    <div>
      <div className="container">
        <div
          style={{
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <MainImg src={myImage[0].source} />
        </div>
        <div className="wwave">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="58"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="58"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="58"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="58" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <MainTitle font={font}>{title}</MainTitle>
      <SubTitle font={font}>{eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  /* border-radius: 200px 200px 0 0; */
  width: 100%;
  object-fit: cover;
`; 
const MainTitle = styled.p<{font: string}>`
  font-size: 1.5rem;
  line-height: 120%;
  white-space: pre-line;
  margin-top: 20px;
  font-family: "${(props) => props.font}", "Noto Sans KR", "Apple SD Gothic Neo";
`;

const SubTitle = styled.p<{font: string}>`
  font-size: 1.1rem;
  line-height: 140%;
  margin-top: 10px;
  white-space: pre-line;
  font-family: "${(props) => props.font}", "Noto Sans KR", "Apple SD Gothic Neo";
`;
