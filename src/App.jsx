import { Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
