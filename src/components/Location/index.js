import { connect } from "react-redux";
import Location from "./Location";

const mapStateToProps = ({ dataBase }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
)(Location);
