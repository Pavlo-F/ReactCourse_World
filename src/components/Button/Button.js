import React from "react";
import PropTypes from "prop-types";
import {
    MOVE, STARVATION, EATING, DYING, REPRODUCTION,
} from "../../consts/algorithms";
import "./style.css";

const algoritms = [STARVATION, EATING, DYING, MOVE, REPRODUCTION];

export default class Button extends React.PureComponent {
    onMoveBtnClick = () => {
        const data = this.props.dataBase.raw;

        if (data.npc) {
            this.props.behave(data, algoritms);
        }
    }

    onShowDBDataBtnClick = () => this.props.getDBData();

    onSaveDBDataBtnClick = () => this.props.setDBData(this.props.dataBase.raw);

    render() {
        return (
            <div>
                <button onClick={this.onMoveBtnClick} >
                    Шаг
                </button>
                <button onClick={this.onShowDBDataBtnClick} >
                    Получить данные
                </button>
                <button onClick={this.onSaveDBDataBtnClick} >
                    Сохранить данные
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    behave: PropTypes.func.isRequired,
    getDBData: PropTypes.func.isRequired,
    setDBData: PropTypes.func.isRequired,
    npc: PropTypes.array,
    locations: PropTypes.array,
};

Button.defaultProps = {
    npc: [],
    locations: [],
};
