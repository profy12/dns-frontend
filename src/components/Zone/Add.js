import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { zoneAddFetch } from '../../actions';


class ZoneAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }
    inputChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    submitZone = (event) => {
        this.props.zoneAddFetch(this.state.input);
        this.setState({
            input: ''
        });
    }
    render() {
        return (
            <div id='zone-add'>
                <input value={this.state.input} onChange={this.inputChange}/>
                <button onClick={this.submitZone} className="press press-orange">Add</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ zoneAddFetch }, dispatch);
}


export default connect(null,mapDispatchToProps)(ZoneAdd);