import * as React from 'react';
import autobind from 'auto-bind';

import {
  Button,

  CardBlock
} from 'reactstrap';

import {
  Toolbox,
  towercgConnect
} from '@towercg/dashboard';


export class ExamplePlugin extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  async _ping(ev) {
    ev && ev.preventDefault();

    const {towercg} = this.props;
    const ret = await towercg.invoke("example.ping");

    console.log(ret);
  }

  render() {
    return (
      <Toolbox.DashboardPluginBody
        key="example"
        title="Example Plugin"
        xs={12} sm={12} md={6}
      >
        <CardBlock>
          <p>
            Ticks: <strong>{this.props.ticks}</strong>
          </p>
          <Button onClick={this._ping}>Ping to Console</Button>
        </CardBlock>
      </Toolbox.DashboardPluginBody>
    );
  }
}

const wrapped = towercgConnect(ExamplePlugin, (state) => ({
  ticks: state.example.ticks
}));
export default wrapped;
