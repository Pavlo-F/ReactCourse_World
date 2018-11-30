import React from "react";
import PropTypes from "prop-types";
import Lion from "../NPCTypes/Lion";
import Wolf from "../NPCTypes/Wolf";
import Rip from "../NPCTypes/Rip";
import Rabbit from "../NPCTypes/Rabbit";
import "./NPCAnimation.css";

export default class NPC extends React.Component {
    renderTemplate = () => {
        console.log("render NPC");

        const { color, typeName, helth } = this.props;
        const time = Date.now();


        if (helth === 0) {
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
                    <Wolf {...this.props} key={`Wolf_${time}`} />
                );
            }
            case "Rabbit": {
                return (
                    <Rabbit {...this.props} key={`Rabbit_${time}`} />
                );
            }

            default: return "unknown type";
            }
        }

        return null;
    }


    renderHelth() {
        const { helth, food } = this.props;

        if (helth > 0) {
            return (
                <div>
                    <div style={{ width: "50px", height: "6px" }}>
                        <div style={{ width: `${helth}%`, height: "50%", backgroundColor: "green" }}></div>
                        <div style={{ width: `${food}%`, height: "50%", backgroundColor: "orange" }}></div>
                    </div>
                </div>

            );
        }

        return null;
    }


    render() {
        const { x, y } = this.props;

        return (
            <div style={{
                position: "absolute", top: `${y * 50}px`, left: `${x * 50}px`, zIndex: "10",
            }} className="moving">
                <div classID="NPCId">{this.renderTemplate()}</div>

                {this.renderHelth()}
            </div>
        );
    }
}

NPC.propTypes = {
    color: PropTypes.string,
    typeName: PropTypes.string,
    helth: PropTypes.number,
    food: PropTypes.number,
};

NPC.defaultProps = {
    color: "red",
    typeName: "",
    helth: 0,
    food: 0,
};
