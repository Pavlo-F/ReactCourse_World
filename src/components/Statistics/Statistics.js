import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Statistics extends React.PureComponent {
    renderStat(stat, title) {
        const {
            columnWidth,
        } = this.props.stat.lifeStat;

        const colSpace = 5;
        let result = null;

        if (stat) {
            result = (
                <div>
                    <div>
                        {title}
                    </div>

                    <svg className="statistic" style={{ height: stat.columnsHeight }}>
                        {
                            stat.data.map((item, index) => (
                                <rect
                                    x={(columnWidth + colSpace) * index}
                                    y={stat.columnsHeight - item.size}
                                    width={columnWidth} height={item.size}
                                    fill={item.color}>
                                    <title>{item.type}: {item.count}</title>
                                </rect>
                            ))
                        }


                    </svg>
                </div>
            );
        }


        return result;
    }


    render() {
        const {
            animalsCountStat,
            animalsHelth,
        } = this.props.stat.lifeStat;

        return (
            <div>
                <div style={{ float: "left", width: "350px" }}>
                    {this.renderStat(animalsCountStat, "График численности (травоядные/хищники):")}
                </div>
                <div>
                    {this.renderStat(animalsHelth, "График жизней животных по типу в % отношении:")}
                </div>
            </div>
        );
    }

}


Statistics.propTypes = {
    props: PropTypes.object,
};
