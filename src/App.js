import "./app.css"
import Home from "./pages/Home/home";
import Profile from "./pages/profile/profile";
import Header from "./components/header/header";
import NotFound from "./pages/NotFound";
import {Routes , Route} from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";
import Footer from "./components/footer";
function App() {
  const {currentUser} = useContext(UserContext)
  return (
    <>
    <Header/>
    <Routes>
    <Route index element={<Home/>} />
    {currentUser?(<Route path="/profile"  element={<Profile/>}/>):(<Route index element={<Home/>}/>)}
    <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
