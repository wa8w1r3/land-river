import { RouteObject } from "react-router-dom";
import { Detail, List } from "./pages";

const AssetRoutes: RouteObject[] = [
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
];
export default AssetRoutes;
