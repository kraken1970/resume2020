import React from "react";
import WebPage from "pages/WebPage/WebPage";
import PdfPage from "pages/PdfPage/PdfPage";
import { Switch, Route } from "react-router-dom";

export default () => {
  return (
    <Switch>

      <Route path="/resume2020" component={WebPage}  />

      <Route path="/" component={WebPage} exact />

      <Route path="/pdf" component={PdfPage} />
    </Switch>
  );
};
