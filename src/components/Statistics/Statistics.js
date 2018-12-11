import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Statistics extends React.PureComponent {
    renderStat(stat, title) {
        const {
            columnWidth,
        } = this.props.stat;

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
                                <rect key={`rect_${index}`}
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
        let result = null;

        if (this.props.stat) {
            const {
                animalsCountStat,
                animalsHelth,
            } = this.props.stat;

            result = (
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

        return result;
    }
}


Statistics.propTypes = {
    stat: PropTypes.shape({
        animalsCountStat: PropTypes.object,
        animalsHelth: PropTypes.object,
        columnWidth: PropTypes.number,
        columnsHeight: PropTypes.number,
    }),
};
