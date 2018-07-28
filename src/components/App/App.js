import React from 'react';
import { Header, Drawer, Content } from 'components/index';

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
        width: !this.state.drawer.open ? 160 : 0,
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
        <Drawer open={drawer.open} />
        <Content drawer={drawer} />
      </div>
    );
  }
}

export default App;
