import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate.js'
import StreamDestroy from './streams/StreamDestroy.js'
import StreamEdit from './streams/StreamEdit.js'
import StreamList from './streams/StreamList.js'
import StreamShow from './streams/StreamShow.js'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDestroy} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;