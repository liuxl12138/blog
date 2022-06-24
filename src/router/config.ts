import React from "react";

export interface BaseRouter {
  path: string;
  element?: any;
  children?: BaseRouter[];
  meta: {
    title: string;
  };
}
const routes: BaseRouter[] = [
  {
    path: "/",
    meta: {
      title: "飞龙的博客",
    },
    element: React.lazy(() => import("../views/index/index")),
    children: [
      {
        path: "index",
        element: React.lazy(() => import("../views/index/index")),
        meta: {
          title: "飞龙的博客",
        },
      },
    ],
  },
];

export default routes;
