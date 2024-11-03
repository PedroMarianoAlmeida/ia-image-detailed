import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  useEffect(() => {
    // Add the 'dark' class to the html element for global dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
