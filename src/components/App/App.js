import React from 'react';
import { Header, Drawer, Content } from 'components/index';

import 'components/App/App.css';

export const App = () => (
  <div className="App">
    <Header />
    <Drawer />
    <Content />
  </div>
);

export default App;
