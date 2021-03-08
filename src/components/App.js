import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header.js";
import StreamCreate from "./streams/StreamCreate.js";
import StreamDestroy from "./streams/StreamDestroy.js";
import StreamEdit from "./streams/StreamEdit.js";
import StreamList from "./streams/StreamList.js";
import StreamShow from "./streams/StreamShow.js";
import history from "../history.js";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDestroy} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
