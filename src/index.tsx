// import { NavermapsProvider } from "react-naver-maps";
import SimpleLayout from "@/layout/Layouts/Simple";
import rawData from "data.json";
import { useParams } from "react-router-dom";
import { IData } from "./types/data";
import MovieLayout from "./layout/Layouts/Movie";
import Splash from "@/components/Splash";
import { ColorProvider } from "@/context/ColorContext";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Snowfall } from "react-snowfall";
import petal from "@/assets/icons/petal3.png";

const IndexPage = () => {
  const db: Record<string, IData> = rawData as any;
  const ncpClientId = "xhxksvdr5n";
  const { pageId } = useParams<{ pageId?: string }>();

  // 후보 id 계산
  const firstKey = Object.keys(db ?? {})[0];
  const fallbackId =
    (db && db[ncpClientId] ? ncpClientId : undefined) ?? firstKey ?? undefined;

  // 실제 사용할 id
  const effectiveId = pageId && db && db[pageId] ? pageId : fallbackId;

  // db가 비었거나, 유효한 키가 전혀 없을 때만 Not Found
  if (!db || !effectiveId) {
    return <div>존재하지 않는 페이지입니다.</div>;
  }

  const data = db[effectiveId];
  const [splashVisible, setSplashVisible] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);
  // const petal1 = document.createElement("img");
  // petal1.src = petal;
  // petal1.width = 512;
  const images = useMemo(() => {
    const img = new Image();
    img.src = petal;
    img.width = 512;
    return [img];
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setStartFadeOut(true); // fade out animation 시작
    }, 4000); // 2초간 유지

    const fullTimer = setTimeout(() => {
      setSplashVisible(false); // splash 완전히 제거
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(fullTimer);
    };
  }, []);

  return (
    // <NavermapsProvider ncpClientId={ncpClientId}>
    <HelmetProvider>
      <ColorProvider id={effectiveId}>
        <Helmet>
          <title>{data.main?.title || "우리 결혼해요"}</title>
          <meta property="og:title" content={data.main?.title} />
          <meta
            name="description"
            content={data.main?.eventDetail || "초대합니다"}
          />
          <meta
            property="og:image"
            content={`https://wedding-invitation-dyyh.github.io/${pageId}/main/main.png`}
          />
          <meta
            property="og:url"
            content={`https://wedding-invitation-dyyh.github.io/${pageId}`}
          />
        </Helmet>
        <Snowfall
          color="white"
          speed={[0, 0.1]}
          wind={[-1, -0.5]}
          images={images}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 99,
            pointerEvents: "none",
          }}
          snowflakeCount={60}
        />

        <>
          {data.splashColor && splashVisible ? (
            <Splash
              title={data.main?.title || ""}
              date={data.main?.date}
              eventDetail_without_date={data.main?.eventDetail_without_date}
              fadeOut={startFadeOut}
              mainColor={data.splashColor}
              splashMode={data.splashMode || "default"}
            />
          ) : (
            <></>
          )}

          <LayoutContainer>
            {data.type == "movie" ? (
              <MovieLayout id={effectiveId} data={data} />
            ) : (
              <SimpleLayout id={effectiveId} data={data} />
            )}
          </LayoutContainer>
        </>
      </ColorProvider>
    </HelmetProvider>
    // </NavermapsProvider>
  );
};
export default IndexPage;

const LayoutContainer = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-items: center;
  min-height: 100vh;
  align-items: center;
  width: 100vw;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
`;
