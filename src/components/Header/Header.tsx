import React from "react";
import { CartIcon } from "../CartIcon";
import { Logo } from "../Logo";
import { Search } from "../Search";

export function Header() {
  const [value, setValue] = React.useState<string>('');
  return (
    <div className="header">
      <div className="container">
        <Logo setValue={setValue}/>
        <Search value={value} setValue={setValue}/>
        <CartIcon />
      </div>
    </div>
  );
}
