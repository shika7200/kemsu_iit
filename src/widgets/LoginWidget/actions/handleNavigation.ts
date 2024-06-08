import { NextRouter } from "next/router";

const handleNavigation = (router: NextRouter, path: string) => {
  router.push(path);
};

export default handleNavigation;
