import { connect } from "react-redux";
import Statistics from "./Statistics";

const mapStateToProps = ({ statistics }) => ({
    stat: statistics,
});

export default connect(
    mapStateToProps,
)(Statistics);
