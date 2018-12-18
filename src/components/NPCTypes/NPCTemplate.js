import React from "react";

export default class NPCTemplate extends React.PureComponent {
    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <div>
                    <img src={this.props.path} alt=""></img>
                </div>
            </div>
        );
    }
}
