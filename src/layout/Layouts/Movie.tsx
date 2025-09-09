import { useRef } from "react";
import { Heading1 } from "@/components/Text.tsx";
import Wrapper from "@/components/Wrapper.tsx";
import Account from "@/layout/Account/Account.tsx";
import Container from "@/layout/Container.tsx";
import GalleryWrap from "@/layout/Gallery/GalleryWrap.tsx";
import Invitation from "@/layout/Invitation/Invitation.tsx";
import Location from "@/layout/Location/Location.tsx";
import { motion } from "framer-motion";
import { IData } from "@/types/data";
import MovieMain from "../MainPic/MovieMain";

interface LayoutProp {
  id: string;
  data: IData;
}

const MovieLayout = ({ id, data }: LayoutProp) => {
  const galleryRef = useRef(null);
  const mainColor = data.mainColor || "#f78828";

  return (
    <Container
      bgColor="black"
      fontColor="white"
      font={data.font || "Chosunilbo_myungjo"}
    >
      <Wrapper style={{ marginTop: "0px" }}>
        <MovieMain id={id} props={data.main} />
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
            <br />
            모시는 글
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
          <GalleryWrap id={id} color="black" />
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
          <Heading1 color={mainColor}>오시는 길</Heading1>
          <Location mapInfo={data.mapInfo} />
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

export default MovieLayout;
