import React from "react";
import PropTypes from "prop-types";

export default class NPC extends React.PureComponent {
    state = {
        food: 100,
        helth: 100,
        isSleep: false,
    }

    renderTemplate = () => {
        const { color, cell } = this.props;

        if (color) {
            return <span style={{ backgroundColor: color, width: "100px", border: "1px solid" }}> NPC {cell.x} : {cell.y} </span>;
        }

        return "";
    }

    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <div classID="NPCId">{this.renderTemplate()}</div>
            </div>
        );
    }
}

NPC.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.Object.isRequired,
};
