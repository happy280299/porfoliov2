import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components";
import Router from "./routes";
import { ContainerMain } from "./styled";
import { useEffect } from "react";
import { ContextProvider } from "./Context";

function App() {
  // useEffect(() => {
  //   const handleResie = () => {
  //     console.log("resize");
  //   };
  //   window.addEventListener("resize", handleResie);

  //   return () => {
  //     window.removeEventListener("resize", handleResie);
  //   };
  // }, []);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((reg) => console.log("✅ Service Worker registered", reg))
          .catch((err) => console.error("❌ Service Worker error", err));
      });
    }
  }, []);
  return (
    <ContextProvider>
      <ContainerMain>
        <ScrollToTop />
        <Router />
      </ContainerMain>
    </ContextProvider>
  );
}

export default App;
