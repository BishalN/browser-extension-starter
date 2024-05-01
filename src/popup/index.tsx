import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../components/ui/button";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <div className="bg-gray-500 text-white">
    Popup page here
    <Button onClick={() => alert("Hello")}>Click me</Button>
  </div>
);
