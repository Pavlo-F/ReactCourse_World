import React from "react";
import PropTypes from "prop-types";
import Grass from "./LocationTypes/Grass";
import Rock from "./LocationTypes/Rock";
import Lake from "./LocationTypes/Lake";

export default class Location extends React.PureComponent {
    state = {
        resource: 100,
    }

    renderTemplate = () => {
        const { color, cell, resource } = this.props;

        if (color && resource) {
            switch (resource) {
            case "grass": {
                return (
                    <Grass { ...this.props }/>
                );
            }
            case "water": {
                return (
                    <Lake { ...this.props }/>
                );
            }
            case "rock": {
                return (
                    <Rock { ...this.props }/>
                );
            }
            default: return "unknown type";
            }
        }

        return <pre style={{ width: "63px" }}> </pre>;
    }

    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <div classID="LocationId">{this.renderTemplate()}</div>
            </div>
        );
    }
}

Location.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.Object,
};
