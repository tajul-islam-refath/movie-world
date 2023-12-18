import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
