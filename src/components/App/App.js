import React from 'react';
import { Drawer } from '@material-ui/core';
import Header from 'components/Header/Header';
import Content from 'components/Content/Content';

import 'components/App/App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: {
        open: false,
        width: 0,
      },
    };
  }

  toggleDrawer() {
    this.setState({
      drawer: Object.assign({}, this.state.drawer, {
        open: !this.state.drawer.open,
        width: !this.state.drawer.open ? 100 : 0,
      }),
    });
  }

  render() {
    const { drawer } = this.state;
    return (
      <div className="App">
        <Header
          drawer={{
            drawerState: drawer,
            toggleDrawer: () => this.toggleDrawer(),
          }}
        />
        <Drawer variant={'persistent'} open={drawer.open}>
          <div style={{ width: drawer.width }}>TEST</div>
        </Drawer>
        <Content drawer={drawer} />
      </div>
    );
  }
}

export default App;
