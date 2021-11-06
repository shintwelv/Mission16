import "./App.css";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import Form from "./pages/Form";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/:process" component={Form} />
    </>
  );
};

export default App;
