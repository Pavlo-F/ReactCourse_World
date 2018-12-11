import { connect } from "react-redux";
import behave from "../../actions/moveButtonAction";
import { getDBData, setDBData } from "../../actions/dataBaseAction";
import Button from "./Button";

const mapStateToProps = store => ({
    dataBase: store.dataBase,
});

const mapDispatchToProps = dispatch => ({
    behave: (data, algoritms) => dispatch(behave(data, algoritms)),
    getDBData: () => dispatch(getDBData("test")),
    setDBData: rawData => dispatch(setDBData("test", rawData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);
