import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory";

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
