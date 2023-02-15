import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/baseApi";

interface RoutesPropsData extends RouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role='', ...rest }) => {
  const [permissions, setPermissions] = useState([] as string[]);
  const { userLogged } = useAuth();
  useEffect(() => {}, [role]);

  if (!userLogged()) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default PrivateRoutes;
