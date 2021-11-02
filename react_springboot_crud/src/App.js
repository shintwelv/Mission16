import "./App.css";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import View from "./pages/View";
import Modify from "./pages/Modify";
import Delete from "./pages/Delete";
import Insert from "./pages/Insert";

const App = () => {
  return (
    <>
      <Route exact path={["/Main", "/"]} component={Main} />
      <Route exact path="/View" component={View} />
      <Route exact path="/Insert" component={Insert} />
      <Route exact path="/Modify" component={Modify} />
      <Route exact path="/Delete" component={Delete} />
    </>
  );
};

export default App;
