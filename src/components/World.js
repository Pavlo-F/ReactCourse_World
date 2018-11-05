import React from "react";
import PropTypes from "prop-types";
import NPCContainer from "./NPCContainer";
import LocationContainer from "./LocationContainer";

export default class World extends React.PureComponent {
    renderTemplate = () => {
        const { event, map, error } = this.props.world;

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>;
        }

        if (map && map.size) {
            const field = World.createField(map);

            return (
                <div className="board">
                    {
                        field.map((obj) => {
                            if (obj.type === "npc") {
                                return (
                                    <NPCContainer {...obj} />
                                );
                            }

                            if (!obj || (obj && obj.type === "location")) {
                                return (
                                    <LocationContainer {...obj} />
                                );
                            }
                        })
                    }
                </div>
            );
        }
    }

    static createField(map) {
        const mapItems = [];

        for (let y = 1; y < map.size.height + 1; y++) {
            for (let x = 1; x < map.size.width + 1; x++) {
                let isExist = false;

                if (map.obj && map.obj.length) {
                    const obj = map.obj;

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
        return (
            <div >
                <div classID="worldId" style={{ width: "900px", border: "1px solid", backgroundColor: "rgb(255, 242, 196)" }}>{this.renderTemplate()}</div>
            </div>
        );
    }
}

World.propTypes = {
    event: PropTypes.Object,
    map: PropTypes.Object,
    error: PropTypes.string,
    isFetching: PropTypes.bool,
};
