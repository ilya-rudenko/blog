import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";

import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import AddPost from "./pages/AddPost";

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="container">
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/post/:postId" component={PostPage} />
          </HashRouter>
        </div>
      </div>
    </Provider>
  );
};

export default App;
