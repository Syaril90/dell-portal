import React, { FunctionComponent } from "react";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import HeaderLeftButton from "./HeaderLeftButton";
import { dellLogo } from "../constants";

type Props = {};

const Header: FunctionComponent<Props> = ({}) => (
  <div className="flex h-16 px-6 justify-between items-center">
    <div className="cursor-pointer">
      <img className="w-44" src={dellLogo} alt="" />
    </div>

    <div className="flex flex-1 max-w-xl py-1 px-3 border border-gray-400">
      <input
        type="text"
        placeholder="Search Dell"
        className="flex-1 outline-none"
      />
      <SearchIcon className="h-5 text-gray-500" />
    </div>

    <div className="flex space-x-4 items-center">
      <HeaderLeftButton Logo={ShoppingCartIcon} Text="Cart" />
      <HeaderLeftButton Logo={UserIcon} Text="Sign In" />
      <HeaderLeftButton Logo={GlobeAltIcon} Text="MY /ENG" />
    </div>
  </div>
);

export default Header;
