import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import "./style.scss";
function App() {
  return (
    <Register />
    // <Home />
    // <Login />
    // <Routes>
    //   <Route path="/">
    //     <Route index element={<Home />} />
    //     <Route path="login" element={<Login />} />
    //     <Route path="register" element={<Register />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
