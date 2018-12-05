import React from "react";
import PropTypes from "prop-types";
import FilterLink from "../FilterLink";
import { HERBIVOROUS, PREDATOR } from "../../consts/animalType";

export default class DBView extends React.PureComponent {

    onShowDBDataBtnClick = () => this.props.getDBData("test");

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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
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
                    type: HERBIVOROUS,
                    resource: "meat",
                    foodType: "grass",
                },
                {
                    x: 5,
                    y: 5,
                    helth: 100,
                    food: 100,
                    color: "black",
                    type: PREDATOR,
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
                    type: PREDATOR,
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
                    type: PREDATOR,
                    typeName: "Wolf",
                    resource: "meat",
                    foodType: "meat",
                },
                {
                    x: 8,
                    y: 3,
                    helth: 100,
                    food: 100,
                    color: "black",
                    type: PREDATOR,
                    typeName: "Lion",
                    resource: "meat",
                    foodType: "meat",
                },
                {
                    x: 7,
                    y: 1,
                    helth: 100,
                    food: 100,
                    color: "blue",
                    type: PREDATOR,
                    typeName: "Lion",
                    resource: "meat",
                    foodType: "meat",
                },
            ],

        };

        this.props.setDBData("test", data);
    }

    render() {
        const { raw, isFetching, error } = this.props;
        let result = {};

        if (isFetching) {
            result = (
                <div>
                    data loading...
                </div>
            );
        } else if (error) {
            result = (
                <div>
                    error loading data from database. {error}
                </div>
            );
        } else {
            result = (
                <div>
                    <div>
                        <FilterLink filter="/">
                            World view
                        </FilterLink>
                    </div>
                    <div>
                        <button onClick={this.onShowDBDataBtnClick} >
                            Get DB data
                        </button>
                        <button onClick={this.onCreateDBDataBtnClick} >
                            Create data
                        </button>
                    </div>

                    {JSON.stringify(raw)}
                </div>
            );
        }

        return result;
    }
}


DBView.propTypes = {
    getDBData: PropTypes.func.isRequired,
    setDBData: PropTypes.func.isRequired,
    props: PropTypes.object,
};
