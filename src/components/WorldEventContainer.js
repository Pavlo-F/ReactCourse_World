import React from 'react';
import { connect } from 'react-redux';
import { WorldEvent } from './WorldEvent';
import { getTemperature, getTimeOfday } from '../actions/WorldActions';

class WorldEventContainer extends React.Component {
  render() {
      const { event, getTemperature, getTimeOfday } = this.props;

    return (
        <WorldEvent
            event={event.event}
            error={event.error}
            isFetching={event.isFetching}
            getTemperature={getTemperature}
            getTimeOfday={getTimeOfday}
        />
    )
  }
}

const mapStateToProps = store => {
    return {
        event: store.event,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTemperature: () => dispatch(getTemperature()),
        getTimeOfday: () => dispatch(getTimeOfday())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorldEventContainer);
