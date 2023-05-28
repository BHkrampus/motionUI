import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-jimnightshade items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-gradient  flex flex-row items-center justify-center md:px-5 w-full" />
        </div>
        <Text className="mt-[345px] text-white_A700" as="h2" variant="h2">
          feel the Vibe
        </Text>
        <Img
          src="images/img_karaokemic115.png"
          className="sm:h-auto h-px mt-[421px] object-cover w-[31%] md:w-full"
          alt="karaokemic115"
        />
        <Img
          src="images/img_karaokemic115_1x435.png"
          className="sm:h-auto h-px mt-20 object-cover w-[31%] md:w-full"
          alt="karaokemic115_One"
        />
      </div>
    </>
  );
};

export default DesktopTwoPage;
