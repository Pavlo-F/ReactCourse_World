import { connect } from "react-redux";
import NPC from "./NPC";

const mapStateToProps = ({ dataBase, behave }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
)(NPC);
