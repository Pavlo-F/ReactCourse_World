import React from 'react';
import PropTypes from 'prop-types';

export class WorldEvent extends React.Component {

    renderTemplate = () => {
        const { event, error, isFetching } = this.props;


        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>
        }

        if (event) {
            return (
                <div>
                    <p>Температура: {event.temperature}</p>
                    <p>Время суток: {event.time}</p>
                </div>
            )
        }
    }


    render() {
        return (
            <div >
                <div >
                    <button className="btn" onClick={this.props.getTemperature} >
                        Температура
                    </button>
                    <button className="btn" onClick={this.props.getTimeOfday} >
                        Время суток
                    </button>
                </div>

                <div className="ib user">{this.renderTemplate()}</div>
            </div>
            )
    }
}

WorldEvent.propTypes = {
    event: PropTypes.Object,
    error: PropTypes.string,
    isFetching: PropTypes.bool,
    getTemperature: PropTypes.func.isRequired,
    getTimeOfday: PropTypes.func.isRequired,
}