import { connect } from "react-redux";
import NPC from "./NPC";

const mapStateToProps = ({ dataBase }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
)(NPC);
