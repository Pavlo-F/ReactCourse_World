import React from "react";
import PropTypes from "prop-types";

export default class User extends React.PureComponent {
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
            },
            {
                cell: { x: 4, y: 8 },
                color: "grey",
                type: "npc",
                typeName: "Wolf",
            },
            {
                cell: { x: 8, y: 8 },
                color: "orange",
                type: "npc",
                typeName: "Lion",
            },
            {
                cell: { x: 6, y: 3 },
                color: "#9b6ee4",
                type: "npc",
                typeName: "Wolf",
            },
            {
                cell: { x: 4, y: 5 },
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
            this.props.worldTick({ ...this.props, map, events });
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
        const { map } = this.props.world;

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>;
        }

        if (isFetching) {
            return <p>Загружаю...</p>;
        }

        if (name) {
            const m = JSON.stringify(map);
            return <p>Мир {name} загружен. Карта {m}</p>;
        }
        return (
            <div>
                <button className="btn" onClick={this.onCreateWorldBtnClick}>
                    Создать
                </button>
                <svg width="20" height="20"
                    id="aliens-go-home-canvas"
                    preserveAspectRatio="xMaxYMax none"
                >
                    <circle cx={10} cy={10} r={5} />
                </svg>
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

User.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string,
    isFetching: PropTypes.bool,
    handleLogin: PropTypes.func.isRequired,
};
