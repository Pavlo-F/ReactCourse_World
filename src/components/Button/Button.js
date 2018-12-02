import React from "react";
import PropTypes from "prop-types";
import {
    MOVE, STARVATION, EATING, DYING,
} from "../../consts/algorithms";

const algoritms = [STARVATION, EATING, DYING, MOVE];

export default class Button extends React.PureComponent {
    onMoveBtnClick = () => {
        const data = this.props.dataBase.raw;

        if (data.npc) {
            this.props.behave(data, algoritms);
        }
    }

    onShowDBDataBtnClick = () => this.props.getDBData("test");

    onSaveDBDataBtnClick = () => this.props.setDBData("test", this.props.dataBase.raw);

    onCreateDBDataBtnClick = () => {
        const data = {

            width: 10,
            height: 10,

            locations: [
                {
                    x: 2,
                    y: 2,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 3,
                    y: 3,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 4,
                    y: 3,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 8,
                    y: 8,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 7,
                    y: 8,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 7,
                    y: 7,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 8,
                    y: 7,
                    color: "green",
                    resource: "grass",
                },
                {
                    x: 4,
                    y: 2,
                    color: "#6ec6e4",
                    resource: "water",
                },
            ],

            npc: [
                {
                    x: 3,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 4,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 5,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 6,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 3,
                    y: 6,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 4,
                    y: 6,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 5,
                    y: 6,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 4,
                    y: 6,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 5,
                    y: 6,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    typeName: "Rabbit",
                    type: "herbivorous",
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 5,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "black",
                    type: "predator",
                    typeName: "Wolf",
                    resource: "meat",
                    foodType: "meat",
                },
                {
                    x: 5,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "red",
                    type: "predator",
                    typeName: "Wolf",
                    resource: "meat",
                    foodType: "meat",
                },
                {
                    x: 5,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "gray",
                    type: "predator",
                    typeName: "Wolf",
                    resource: "meat",
                    foodType: "meat",
                },
            ],

        };


        this.props.setDBData("test", data);
    }

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
                <button onClick={this.onCreateDBDataBtnClick} >
                    Создать данные
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    behave: PropTypes.func.isRequired,
    getDBData: PropTypes.func.isRequired,
    setDBData: PropTypes.func.isRequired,
    npc: PropTypes.object,
    locations: PropTypes.object,
};

Button.defaultProps = {
    npc: [],
    locations: [],
};
