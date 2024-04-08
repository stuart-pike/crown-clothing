// dependencies
import { Routes, Route } from "react-router-dom";
// components
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* The index property is a special case in React Router that specifies the route to render when the parent route's path matches exactly. */}
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
