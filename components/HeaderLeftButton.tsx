import React, { FunctionComponent } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

type Props = {
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Text: string;
};

const HeaderLeftButton: FunctionComponent<Props> = ({ Logo, Text }) => (
  <div className="flex space-x-1 p-2 items-center text-gray-500 hover:bg-gray-200 cursor-pointer">
    <Logo className="h-4" />
    <div className="text-xs">{Text}</div>
    <ChevronDownIcon className="h-4" />
  </div>
);

export default HeaderLeftButton;
