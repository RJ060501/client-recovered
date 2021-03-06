import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StreamEdit from './streams/StreamEdit';
// import StreamCreate from './streams/StreamCreate';
// import StreamShow from './streams/StreamShow';
// import StreamDelete from './streams/StreamDelete';
// import StreamList from './streams/StreamList';
import Header from './header/Header';
import Home from "./home/Home";


const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          {/* <p>Any component that is not a child of BrowserRouter cannont contain any react-router related components.</p> */}
          <Header />
          <Routes>
            <Route path='/' exact component={Home} />
            {/* <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit' exact component={StreamEdit} />
            <Route path='/streams/delete' exact component={StreamDelete} />
            <Route path='/streams/show' exact component={StreamShow} /> */}
          </Routes>
        </div>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
