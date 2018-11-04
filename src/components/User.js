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
            },
            {
                cell: { x: 4, y: 8 },
                color: "grey",
                type: "npc",
            },
            {
                cell: { x: 8, y: 8 },
                color: "yellow",
                type: "npc",
            },
            {
                cell: { x: 6, y: 3 },
                color: "#9b6ee4",
                type: "npc",
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
        this.props.createWorld(userInput.value, map, events);
    }

    onSaveBtnClick = () => {
        const {
            name, map,
        } = this.props.user;

        if (map && name) {
            const events = [{ 1: 1 }, { 1: 2 }];
            this.props.createWorld(name, map, events);
        }
    }

    onWorldTickBtnClick = () => {
        const {
            name, map,
        } = this.props.user;

        if (map && name) {
            const events = [{ 1: 1 }, { 1: 2 }];
            this.props.worldTick({ ...this.props, events });
        }
    }

    handleChange = (e) => {
        const { id } = e.currentTarget;
        this.setState({ [id]: e.currentTarget.value });
    }

    renderTemplate = () => {
        const {
            name, error, isFetching, map,
        } = this.props.user;


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
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
};
