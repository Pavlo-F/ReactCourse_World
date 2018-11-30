import React from "react";
import PropTypes from "prop-types";

export default class DBView extends React.PureComponent {
    render() {
        const { raw, isFetching, error } = this.props;


        if (isFetching) {
            return (
                <div>
                    data loading...
                </div>
            );
        }

        if (error) {
            return (
                <div>
                    error loading data from database. {error}
                </div>
            );
        }

        return (
            <div>
                {JSON.stringify(raw)}
            </div>
        );
    }
}


DBView.propTypes = {
    props: PropTypes.object,
};
