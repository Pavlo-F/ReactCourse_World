import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Lion from "./NPCTypes/Lion";
import Wolf from "./NPCTypes/Wolf";
import Rip from "./NPCTypes/Rip";
import Rabbit from "./NPCTypes/Rabbit";

import { move, eat, chekHelth } from "../AI/AI";

import "./NPCAnimation.css";

class NPC extends React.PureComponent {
    food = 100;

    helth = 100;

    cell = {};

    constructor(props) {
        super(props);
        this.food = props.resources.food;
        this.helth = props.resources.helth;
        this.cell = props.cell;
    }


    renderTemplate = () => {
        console.log("render NPC");

        const { color, typeName } = this.props;
        const time = Date.now();


        if (this.helth === 0) {
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
        this.food = eat(this.food);

        if (this.food <= 0) {
            this.helth = chekHelth(this.helth);
        }

        if (this.helth > 0) {
            return (
                <div>
                    <div style={{ width: "50px", height: "6px" }}>
                        <div style={{ width: `${this.helth}%`, height: "50%", backgroundColor: "green" }}></div>
                        <div style={{ width: `${this.food}%`, height: "50%", backgroundColor: "orange" }}></div>
                    </div>
                </div>

            );
        }

        return null;
    }


    render() {
        const { width, height } = this.props;

        if (this.helth > 0) {
            this.cell = move(this.cell.x, this.cell.y, width, height);
        }

        return (
            <div style={{
                position: "absolute", top: `${this.cell.y * 50}px`, left: `${this.cell.x * 50}px`, zIndex: "10",
            }} className="moving">
                <div classID="NPCId">{this.renderTemplate()}</div>

                {this.renderHelth()}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    npc: store.npc,
});

const mapDispatchToProps = dispatch => ({
    // eat: food => dispatch(eat(food)),
    // getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NPC);

NPC.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.object,
};
