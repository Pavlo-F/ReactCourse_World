import React from "react";
import PropTypes from "prop-types";
import FilterLink from "../FilterLink";
import defaultData from "../../consts/defaultData";

export default class DBView extends React.PureComponent {

    onShowDBDataBtnClick = () => this.props.getDBData("test");

    onCreateDBDataBtnClick = () => this.props.setDBData("test", defaultData);

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
