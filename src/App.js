import { Routes, Route } from "react-router-dom";
import NavBar from "./route/navbar";
import Homepage from "./route/homepage";
import SignIn from "./components/sign-in";

const Shop = () => {
 return (
  <div>
   <h1>shop page</h1>
  </div>
 );
};
const App = () => {
 return (
  <Routes>
   <Route path="/" element={<NavBar />}>
    <Route index element={<Homepage />} />
    <Route path="shop" element={<Shop />} />
    <Route path="sign-In" element={<SignIn />} />
   </Route>
  </Routes>
 );
};
export default App;
