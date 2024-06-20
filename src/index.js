import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { ChakraProvider } from "@chakra-ui/react";
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeEx0Q3xbf1x0ZFdMZVhbQXVPMyBoS35RckVlWHZecnFRQ2NcWUJx');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Suspense>
  </SidebarProvider>
);
