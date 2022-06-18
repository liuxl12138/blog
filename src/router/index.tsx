import { RouteObject, useRoutes } from "react-router-dom";
import routes, { BaseRouter } from "./config";

export default function RouterList() {
  const createRouteArr = (routes: BaseRouter[]) => {
    let routeArr: Array<RouteObject> = [];
    routes.forEach((route) => {
      routeArr.push({
        path: route.path,
        element: route.element && <route.element />,
        children: route.children && createRouteArr(route.children),
      });
    });
    return routeArr;
  };
  return useRoutes(createRouteArr(routes));
}
