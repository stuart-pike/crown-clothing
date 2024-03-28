import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory";

function Home() {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}

export default Home;
