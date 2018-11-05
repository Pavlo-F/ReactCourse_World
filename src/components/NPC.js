import React from "react";
import PropTypes from "prop-types";
import Lion from "./NPCTypes/Lion";
import Wolf from "./NPCTypes/Wolf";

export default class NPC extends React.PureComponent {
    state = {
        food: 100,
        helth: 100,
        isSleep: false,
    }

    renderTemplate = () => {
        const { color, cell, typeName } = this.props;

        if (color) {
            switch (typeName) {
            case "Lion": {
                return (
                    <Lion { ...this.props }/>
                );
            }
            case "Wolf": {
                return (
                    <Wolf { ...this.props }/>
                );
            }

            default: return "unknown type";
            }
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
    cell: PropTypes.Object,
};
