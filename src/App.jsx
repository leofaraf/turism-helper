// import { YMaps, Map, Placemark } from "react-yandex-maps";
// import Popup from "reactjs-popup";
// import { RouterContext } from "./RouterProvider";

import Footer from "./Footer";
import Map from "./Map";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex flex-col gap-4 items-center justify-between">
        <div className="bg-gray-200 w-full h-full">
          {/* <Map></Map> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
