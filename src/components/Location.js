import React from "react";
import PropTypes from "prop-types";

export default class Location extends React.PureComponent {
    state = {
        resource: 100,
    }

    renderTemplate = () => {
        const { color, cell } = this.props;

        if (color) {
            return <span style={{ backgroundColor: color, width: "100px", border: "1px solid" }}> Loc {cell.x} : {cell.y} </span>;
        }

        return <pre style={{ width: "63px", border: "1px solid" }}> </pre>;
    }

    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <div classID="LocationId">{this.renderTemplate()}</div>
            </div>
        );
    }
}

Location.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.Object.isRequired,
};
