import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NPC from "./NPC";
import Location from "./Location";
import { getTemperature, getTimeOfday } from "../actions/WorldActions";

class World extends React.PureComponent {
    renderTemplate = () => {
        console.log("render World");

        const { map, error } = this.props.world;

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>;
        }

        const time = Date.now();

        if (map && map.size) {
            const field = World.createField(map);

            return (
                <div className="board">
                    {
                        field.map((obj, index) => {
                            if (obj.type === "npc") {
                                return (
                                    <NPC {...obj} {...map.size} key= { `NPC_${time - index}` } />
                                );
                            }

                            if ((obj && obj.type === "location")) {
                                return (
                                    <Location {...obj} key={ `Location_${time - index}` } />
                                );
                            }

                            return null;
                        })
                    }
                </div>
            );
        }

        return null;
    }

    static createField(map) {
        const mapItems = [];

        for (let y = 1; y < map.size.height + 1; y++) {
            for (let x = 1; x < map.size.width + 1; x++) {
                let isExist = false;

                if (map.obj && map.obj.length) {
                    const { obj } = map;

                    for (let i = 0; i < obj.length; i++) {
                        if (obj[i].cell.x === x && obj[i].cell.y === y) {
                            mapItems.push(obj[i]);
                            isExist = true;
                            break;
                        }
                    }
                }

                if (!isExist) {
                    const empty = { cell: { x, y }, type: "location" };
                    mapItems.push(empty);
                }
            }
        }

        return mapItems;
    }


    render() {
        const { event } = this.props.event;

        let bgColor = "";

        if (event && event.time === "night") {
            bgColor = "rgb(39, 39, 39)";
        } else {
            bgColor = "rgb(255, 242, 196)";
        }


        return (
            <div >
                <div classID="worldId" style={{
                    width: "900px", height: "600px", border: "1px solid", backgroundColor: bgColor, position: "relative",
                }
                }>{this.renderTemplate()}</div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    world: store.world,
    event: store.event,
});

const mapDispatchToProps = dispatch => ({
    getTemperature: () => dispatch(getTemperature()),
    getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(World);

World.propTypes = {
    event: PropTypes.object,
    map: PropTypes.object,
    error: PropTypes.string,
    isFetching: PropTypes.bool,
};
