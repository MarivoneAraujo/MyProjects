import React from "react";
import { Switch, Route } from "react-router-dom";
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";
import PostDetailsPage from "./PostDetailsPage";
import SignupPage from "./SignupPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path={"/signup"}>
        <SignupPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path={"/feed"}>
        <FeedPage />
      </Route>
      <Route exact path={"/post/:postId"}>
        <PostDetailsPage />
      </Route>
    </Switch>
  );
};

export default Router;
