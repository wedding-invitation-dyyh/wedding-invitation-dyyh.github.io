import styled from "@emotion/styled";

const Container = styled.div<{bgColor:string, fontColor:string, font:string}>`
  /*border-image-source: url('/background.png');  이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  width: 100%;
  margin: 0 auto;
  font-family: "${(props) => props.font}", "Noto Sans KR", "Apple SD Gothic Neo";
  @media screen and (min-width: 500px) {
  }
`;
export default Container;
