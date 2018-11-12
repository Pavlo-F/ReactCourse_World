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

        console.log("render NPC");

        const { color, cell, typeName } = this.props;

        const time = Date.now();

        if (color) {
            switch (typeName) {
            case "Lion": {
                return (
                    <Lion {...this.props} key={`Lion_${time}`} />
                );
            }
            case "Wolf": {
                return (
                    <Wolf {...this.props} key={`Wolf_${time}`}/>
                );
            }

            default: return "unknown type";
            }
        }

        return "";
    }

    render() {

    const { cell } = this.props;

        return (
            <div style={{ position: "absolute", top: `${cell.y * 50}px`, left: `${cell.x * 80}px`, zIndex: "10"  }}>
                <div classID="NPCId">{this.renderTemplate()}</div>
            </div>
        );
    }
}

NPC.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.object,
};
