// import { YMaps, Map, Placemark } from "react-yandex-maps";
// import Popup from "reactjs-popup";
// import { RouterContext } from "./RouterProvider";

import Footer from "./Footer";
import Map from "./Map";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex flex-col items-center justify-between">
        <div className="w-full h-screen flex flex-col gap-4">
          <Map />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
