import "./app.css"
import Home from "./pages/Home/home";
import Header from "./components/header/header";
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route index element={<Home/>} />
    </Routes>

    </>
  );
}

export default App;
