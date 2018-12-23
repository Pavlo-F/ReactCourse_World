import { connect } from "react-redux";
import WorldContainer from "./WorldContainer";
import spawn from "../../actions/shapeAction";

const mapDispatchToProps = dispatch => ({
    spawnShape: (data, obj) => dispatch(spawn(data, obj)),
});

const mapStateToProps = ({ dataBase }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldContainer);
