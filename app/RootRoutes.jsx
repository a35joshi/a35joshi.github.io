import React from "react";
import { Redirect } from "react-router-dom";

import productRoutes from "./views/products/ProductRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import formsRoutes from "./views/forms/FormsRoutes";

import contactUsRoute from "./views/contactUs/ContactUsRoute";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  }
];

const routes = [
  ...redirectRoute,
  ...productRoutes,
  ...contactUsRoute,
];

export default routes;
