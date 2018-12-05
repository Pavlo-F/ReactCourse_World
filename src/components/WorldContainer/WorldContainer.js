import React from "react";
import PropTypes from "prop-types";
import Location from "../Location";
import NPC from "../NPC/NPC";

export default class WorldContainer extends React.PureComponent {
    render() {
        const { raw } = this.props;

        const bgColor = "rgb(255, 242, 196)";

        if (raw.locations && raw.npc) {
            return (
                <div classID="worldId" style={{
                    width: "900px", height: "600px", border: "1px solid", backgroundColor: bgColor, position: "relative",
                }}>
                    <div>
                        {
                            raw.locations.map((loc, index) => <Location {...loc} key={`loc_${index}`}
                            />)
                        }

                        {
                            raw.npc.map((animal, index) => <NPC {...animal} key={`animal_${index}`}
                            />)
                        }
                    </ div>
                </div>
            );
        }

        return null;
    }
}

WorldContainer.propTypes = {
    raw: PropTypes.object,
};

WorldContainer.defaultProps = {
    raw: {},
};
