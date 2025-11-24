import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            fontFamily: "Cinzel, serif",
            borderRadius: "10px",
            background: "#fffdf7",
            color: "#3b2f1e",
            border: "1px solid #d8c9a8",
            boxShadow: "0 3px 10px rgba(0,0,0,.15)",
          },
        }}
      />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
 