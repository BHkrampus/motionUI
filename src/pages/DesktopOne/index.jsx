import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-jimnightshade gap-[41px] items-start justify-start mx-auto pb-[168px] w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-gradient  flex flex-row items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex md:px-5 relative w-[87%] md:w-full">
          <Img
            src="images/img_karaokemic115_688x415.png"
            className="h-[688px] my-auto object-cover rounded-[184px] w-[34%]"
            alt="karaokemic115"
          />
          <div className="flex flex-col gap-9 justify-start ml-[undefinedpx] mt-auto w-[49%] z-[1]">
            <Text className="text-white_A700" as="h2" variant="h2">
              feel the Vibe
            </Text>
            <Img
              src="images/img_mattbotsfordo.png"
              className="h-[133px] md:h-auto md:ml-[0] ml-[123px] rounded-[50%] w-1/4"
              alt="mattbotsfordo"
            />
          </div>
          <Text
            className="ml-[-70px] mr-[60px] mt-[30px] text-white_A700 z-[1]"
            as="h2"
            variant="h2"
          >
            create own Music
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
