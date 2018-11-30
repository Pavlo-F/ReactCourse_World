import { connect } from "react-redux";
import behave from "../../actions/moveButtonAction";
import { getDBData, setDBData } from "../../actions/dataBaseAction";
import Button from "./Button";

const mapStateToProps = store => ({
    dataBase: store.dataBase,
});

const mapDispatchToProps = dispatch => ({
    behave: (data, algoritm) => dispatch(behave(data, algoritm)),
    getDBData: name => dispatch(getDBData(name)),
    setDBData: (name, rawData) => dispatch(setDBData(name, rawData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);