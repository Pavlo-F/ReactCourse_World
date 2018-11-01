﻿import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {

    state = {
        userNameid: ''
    }

    onLoginBtnClick = e => {
        const userInput = document.getElementById('userNameid');
        this.props.handleLogin(userInput.value);
    }


    onCreateUserBtnClick = e => {
        const userInput = document.getElementById('userNameid');
        this.props.createUser(userInput.value);
    }


    handleChange = (e) => {
        const { id, value } = e.currentTarget;
        this.setState({ [id]: e.currentTarget.value });
    }

    renderTemplate = () => {
        const { name, error, isFetching } = this.props;
        const { userNameid } = this.state;


        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>
        }

        if (isFetching) {
            return <p>Загружаю...</p>
        }

        if (name) {
            return <p>Мир пользователя {name} загружен</p>
        } else {
            return (
                <div>
                    <button className="btn" onClick={this.onLoginBtnClick}>
                        Загрузить
                    </button>
                    <button className="btn" onClick={this.onCreateUserBtnClick}>
                        Создать
                    </button>
                    <input id="userNameid" type="text"
                        onChange={this.handleChange}
                        value={userNameid} />
                </div>
            )
        }
    }


    render() {
        return (<div className="ib user">{this.renderTemplate()}</div>)
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
}