import { useRef } from "react";
import { Heading1 } from "@/components/Text.tsx";
import Wrapper from "@/components/Wrapper.tsx";
import Account from "@/layout/Account/Account.tsx";
import Container from "@/layout/Container.tsx";
import GalleryWrap from "@/layout/Gallery/GalleryWrap.tsx";
// import Guestbook from "@/layout/Guestbook/Guestbook.tsx";
import Invitation from "@/layout/Invitation/Invitation.tsx";
// import Location from "@/layout/Location/Location.tsx";
import Main from "@/layout/MainPic/Main";
import { motion } from "framer-motion";
import { IData } from "@/types/data";
import { useColor } from "@/context/ColorContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LayoutProp {
  id: string;
  data: IData;
}

const SimpleLayout = ({ id, data }: LayoutProp) => {
  const galleryRef = useRef(null);
  const { mainColor, fontColor, bgColor } = useColor();

  return (
    <Container
      bgColor={bgColor}
      fontColor={fontColor}
      font={data.font || "Gowun Dodum"}
    >
      <Wrapper style={{ marginTop: "0px" }}>
        <Main
          font={data.mainFont || data.font || "Gowun Dodum"}
          id={id}
          props={data.main}
        />
      </Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Wrapper>
          <Heading1 color={mainColor}>
            <DotLottieReact
              src="https://lottie.host/2555558f-ceeb-47f0-b173-f7e9ceb2bdaf/r9FXjcWp4n.lottie"
              loop
              autoplay
              style={{ width: "90px" }}
            />
          </Heading1>
          <Invitation {...data.main} />
        </Wrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Wrapper ref={galleryRef}>
          <Heading1 color={mainColor}>Gallery</Heading1>
          <GalleryWrap id={id} color="white" />
        </Wrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Wrapper>
          <Heading1 style={{ marginBottom: "15px" }} color={mainColor}>
            Location
          </Heading1>
          {/* <Location mapInfo={data.mapInfo}/> */}
        </Wrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Wrapper>
          <Heading1 color={mainColor}>마음 전하실 곳</Heading1>
          <Account id={id} hostInfo={data.hostInfo} />
        </Wrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        {/* <Wrapper>
          <Heading1 color={mainColor}>신랑 신부에게</Heading1>
          <Guestbook />
        </Wrapper> */}
      </motion.div>
    </Container>
  );
};

export default SimpleLayout;
