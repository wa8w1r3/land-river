import { ReactElement } from "react";
import ReactModal from "react-modal";
import { Header } from "./components";
import List from "./modules/Asset/pages/List.page";

function App(): ReactElement {
  ReactModal.setAppElement("#root");

  return (
    <div className="h-screen w-screen bg-slate-50 pb-4">
      <Header />
      <section className="flex flex-col items-center w-full h-full overflow-auto">
        <div className="h-40v w-full z-0 absolute bg-primary rounded-b-2xl"></div>
        <List />
      </section>
    </div>
  );
}

export default App;
