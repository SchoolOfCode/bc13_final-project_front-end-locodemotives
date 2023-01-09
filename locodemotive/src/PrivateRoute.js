import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ redirectTo, component, isAuthenticated} ) {
    return isAuthenticated ? component : <Navigate to={redirectTo} />;
}