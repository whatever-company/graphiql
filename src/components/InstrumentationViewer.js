import React, {PropTypes} from 'react';

export class InstrumentationViewer extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }

  state = {
    instrumentation: null
  };

  loadInstrumentation = ({value}) => {
    console.log(value)
    try {
      this.setState({
        instrumentation: value ? JSON.parse(value).instrumentation : null
      })
    } catch (e) {
      
    }
  } 

  componentWillMount () {
    this.loadInstrumentation(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.loadInstrumentation(nextProps);
  }

  render() {
    const {instrumentation} = this.state;
    if (!instrumentation) {
      return null;
    }

    return (
      <div className="instrumentation-window">
        <iframe className="chart" src={instrumentation.chart} width="100%" height="100%" frameBorder="0" />
      </div>
    );
  }
}
