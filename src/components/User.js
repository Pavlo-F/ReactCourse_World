import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleLogin, createWorld, worldTick } from "../actions/UserActions";

class User extends React.PureComponent {
    state = {
        userNameid: "",
    }

    onLoginBtnClick = () => {
        const userInput = document.getElementById("userNameid");
        this.props.handleLogin(userInput.value);
    }


    onCreateWorldBtnClick = () => {
        const userInput = document.getElementById("userNameid");
        const map = {
            size: {
                width: 10,
                height: 10,
            },
            obj: [{
                cell: { x: 2, y: 5 },
                color: "red",
                type: "npc",
                typeName: "Lion",
                resources: { helth: 100, food: 100 },
                food: "meat",
            },
            {
                cell: { x: 4, y: 8 },
                color: "grey",
                type: "npc",
                typeName: "Wolf",
                resources: { helth: 100, food: 100 },
                food: "meat",
            },
            {
                cell: { x: 8, y: 8 },
                color: "orange",
                type: "npc",
                typeName: "Lion",
                resources: { helth: 100, food: 100 },
                food: "meat",
            },
            {
                cell: { x: 6, y: 3 },
                color: "#9b6ee4",
                type: "npc",
                typeName: "Wolf",
                resources: { helth: 100, food: 100 },
                food: "meat",
            },
            {
                cell: { x: 1, y: 4 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 1, y: 5 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 2, y: 4 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 2, y: 5 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 3, y: 4 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 3, y: 5 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },
            {
                cell: { x: 2, y: 9 },
                color: "gray",
                type: "npc",
                typeName: "Rabbit",
                resources: { helth: 100, food: 100 },
                resource: "meat",
                food: "grass",
            },

            {
                cell: { x: 1, y: 1 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 1, y: 2 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 2, y: 1 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 2, y: 2 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 4, y: 5 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 5, y: 5 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 6, y: 5 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 4, y: 4 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 4, y: 3 },
                color: "green",
                resource: "grass",
                type: "location",
            },
            {
                cell: { x: 9, y: 5 },
                color: "#6ec6e4",
                resource: "water",
                type: "location",
            },
            {
                cell: { x: 7, y: 7 },
                color: "black",
                resource: "rock",
                type: "location",
            },
            ],
        };

        const events = [{ 1: 1 }, { 1: 2 }];
        this.props.createWorld(userInput.value, map, events, true);
    }

    onSaveBtnClick = () => {
        const { map } = this.props.world;
        const { name } = this.props.user;

        if (map && name) {
            const events = [{ 1: 1 }, { 1: 2 }];
            this.props.createWorld(name, map, events);
        }
    }

    onWorldTickBtnClick = () => {
        const { map } = this.props.world;
        const { name } = this.props.user;

        if (map && name) {
            const events = [{ 1: 1 }, { 1: 2 }];
            this.props.worldTick();
        }
    }

    handleChange = (e) => {
        const { id } = e.currentTarget;
        this.setState({ [id]: e.currentTarget.value });
    }

    renderTemplate = () => {
        const {
            name, error, isFetching,
        } = this.props.user;

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>;
        }

        if (isFetching) {
            return <p>Загружаю...</p>;
        }

        if (name) {
            //const { map } = this.props.world;
            //const m = JSON.stringify(map);
            return <p>Мир {name} загружен.</p>;
        }
        return (
            <div>
                <button className="btn" onClick={this.onCreateWorldBtnClick}>
                    Создать
                </button>
            </div>
        );
    }


    render() {
        const { userNameid } = this.state;

        return (

            <div>
                <div style={{ display: "block" }}>
                    <span>Название мира</span>

                    <input id="userNameid" type="text"
                        onChange={this.handleChange}
                        value={userNameid} />
                </div>

                <div className="ib user" style={{ display: "inline", margin: "1px" }}>{this.renderTemplate()} </div>

                <button className="btn" onClick={this.onLoginBtnClick}>
                    Загрузить
                </button>

                <button style={{ display: "inline" }} className="btn" onClick={this.onSaveBtnClick}>
                    Сохранить
                </button>
                <button style={{ display: "inline" }} className="btn" onClick={this.onWorldTickBtnClick}>
                    Шаг
                </button>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user,
    world: store.world,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: userName => dispatch(handleLogin(userName)),
    createWorld: (userName, map, events) => dispatch(createWorld(userName, map, events)),
    worldTick: props => dispatch(worldTick(props)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);

User.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string,
    isFetching: PropTypes.bool,
    handleLogin: PropTypes.func.isRequired,
};
