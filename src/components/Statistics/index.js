import { connect } from "react-redux";
import getStatistics from "../../utils/statisticsUtil";
import Statistics from "./Statistics";

const mapStateToProps = ({ dataBase }) => ({
    stat: getStatistics(dataBase.raw.npc),
});

export default connect(
    mapStateToProps,
)(Statistics);
