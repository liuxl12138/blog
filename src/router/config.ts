import React from "react";

export interface BaseRouter {
  path: string;
  component?: any;
  children?: BaseRouter[];
  meta: {
    title: string;
  };
}
const routes: BaseRouter[] = [
  {
    path: "/",
    component: React.lazy(() => import("../views/index")),
    meta: {
      title: "飞龙的博客",
    },
  },
];

export default routes;
