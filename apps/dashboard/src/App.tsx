import { ReactElement } from "react";
import ReactModal from "react-modal";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from "react-router-dom";
import { Header } from "./components";
import AssetRoutes from "./modules/Asset/Asset.routes";

function App(): ReactElement {
  ReactModal.setAppElement("#root");

  const routes: RouteObject[] = [...AssetRoutes];

  return (
    <div className="h-screen w-screen bg-slate-50 pb-4">
      <Header />
      <section className="flex flex-col items-center w-full h-full overflow-auto">
        <div className="h-40v w-full z-0 absolute bg-primary rounded-b-2xl"></div>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
