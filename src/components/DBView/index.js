import { connect } from "react-redux";
import DBView from "./DBView";
import { getDBData, setDBData } from "../../actions/dataBaseAction";

const mapDispatchToProps = dispatch => ({
    getDBData: () => dispatch(getDBData("test")),
    setDBData: rawData => dispatch(setDBData("test", rawData)),
});

const mapStateToProps = ({ dataBase }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DBView);
