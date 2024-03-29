import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

function LayoutComponent() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
}

export default LayoutComponent;
