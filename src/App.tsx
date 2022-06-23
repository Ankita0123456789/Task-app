import React from "react";
import "./App.css";
import User from "./modules/user/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./modules/tasks/Tasks";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  // const [auth, toggle] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth ) {
  //     navigate("/");
  //   }
  // }, [auth])
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
