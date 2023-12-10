import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
export const _screenSize = atom({
  key: "_screenSize", // unique ID (with respect to other atoms/selectors)
  default: 0,
});
export const _menuIsOpen = atom({
  key: "_menuIsOpen", // unique ID (with respect to other atoms/selectors)
  default: false,
});
