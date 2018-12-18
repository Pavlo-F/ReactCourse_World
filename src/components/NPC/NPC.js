import React from "react";
import PropTypes from "prop-types";
import NPCTemplate from "../NPCTypes/NPCTemplate";
import LionSvg from "../NPCTypes/svg/lion.svg";
import RabbitSvg from "../NPCTypes/svg/rabbit.svg";
import RipSvg from "../NPCTypes/svg/rip.svg";
import WolfSvg from "../NPCTypes/svg/wolf.svg";

import "./NPCAnimation.css";

export default class NPC extends React.Component {
    renderTemplate = () => {
        console.log("render NPC");

        const {
            color,
            typeName,
            helth,
            id,
        } = this.props;

        if (helth <= 0) {
            return <NPCTemplate path={RipSvg} key={`Rip_${id}`} />;
        }

        if (color) {
            switch (typeName) {
            case "Lion": {
                return (
                    <NPCTemplate path={LionSvg} key={`Lion_${id}`} />
                );
            }
            case "Wolf": {
                return (
                    <NPCTemplate path={WolfSvg} key={`Wolf_${id}`} />
                );
            }
            case "Rabbit": {
                return (
                    <NPCTemplate path={RabbitSvg} key={`Rabbit_${id}`} />
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
                <div>{this.renderTemplate()}</div>

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
