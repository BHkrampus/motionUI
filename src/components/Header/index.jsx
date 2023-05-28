import React from "react";

import { Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="font-jimnightshade mb-[5px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[18px] text-white_A700"
          as="h1"
          variant="h1"
        >
          HOME
        </Text>
        <Text
          className="font-jimnightshade mb-[7px] sm:ml-[0] ml-[72px] sm:mt-0 mt-4 text-white_A700"
          as="h1"
          variant="h1"
        >
          ABOUT
        </Text>
        <Text
          className="font-jimnightshade mb-2 sm:ml-[0] ml-[53px] sm:mt-0 mt-[15px] text-white_A700"
          as="h1"
          variant="h1"
        >
          HISTORY
        </Text>
        <Text
          className="font-jimnightshade mb-1.5 sm:ml-[0] ml-[419px] mr-[53px] sm:mt-0 mt-[17px] text-white_A700"
          as="h1"
          variant="h1"
        >
          SIGN IN
        </Text>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
