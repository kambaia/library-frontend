import { Route, Switch } from "react-router-dom";
import { LayoutMain } from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import List from "../pages/Books";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import Books from "../pages/Books";
import AdminRegiste from "../pages/admin/register";

const Routes = () => {
  return (
    <Switch>
      <LayoutMain>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Login} />
        <PrivateRoutes path="/admin/dashboard/:page" component={Dashboard} />
        <PrivateRoutes path="/admin/book-register/:page" component={AdminRegiste} />
        <PrivateRoutes path="/books" component={Books}/>
        <PrivateRoutes
          path="/list"
          component={List}
        />
      </LayoutMain>
    </Switch>
  );
};

export default Routes;
