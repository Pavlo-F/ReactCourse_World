import React from "react";
import PropTypes from "prop-types";
import Lion from "./NPCTypes/Lion";
import Wolf from "./NPCTypes/Wolf";
import Rip from "./NPCTypes/Rip";

export default class NPC extends React.PureComponent {
    renderTemplate = () => {

        console.log("render NPC");

        const { color, typeName } = this.props;
        const time = Date.now();


        if (this.props.resources.helth === 0) {
            return <Rip key={`Rip_${time}`} />;
        }

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


    renderHelth() {
        const { helth, food } = this.props.resources;

        if (helth > 0) {
            return (
                <div>
                    <div>h: {helth}</div>
                    <div>f: {food}</div>
                </div>
            );
        }

        return null;
    }
    
    render() {
        const { cell } = this.props;

        return (
            <div style={{ position: "absolute", top: `${cell.y * 50}px`, left: `${cell.x * 80}px`, zIndex: "10"  }}>
                <div classID="NPCId">{this.renderTemplate()}</div>


                {this.renderHelth()}
            </div>
        );
    }
}

NPC.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.object,
};
