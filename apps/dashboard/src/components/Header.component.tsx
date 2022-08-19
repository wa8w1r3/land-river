import { ReactElement } from "react";
import { Profile, SignOut } from ".";

const Header = (): ReactElement => {
  return (
    <header className="sticky z-10 top-0 w-full py-2 px-4 bg-primary-dark">
      <div className="w-2/3 sm:w-4/5 m-auto flex justify-between text-white">
        <div>
          <img
            src="logo-full-white.png"
            alt="Land River"
            className="w-full h-8"
          />
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-medium">Admin</span>
          <Profile />
          <SignOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
