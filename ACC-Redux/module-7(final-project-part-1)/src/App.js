import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  // console.log(process.env);
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
