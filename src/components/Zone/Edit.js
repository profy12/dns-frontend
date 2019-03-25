import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { zoneGetFetch, zoneDelFetch } from '../../actions';

class ZoneEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    refresh = () => {
        console.log("refreshing data");
        this.props.zoneGetFetch(this.props.zone);
    }
    /*
    delete = (event) => {
        this.props.zoneDelFetch(event.target.value);
        console.log(`suppression de ${event.target.value}`);
    }
    */
    componentWillMount(){
        this.refresh();
    }
    render() {
        const isFetching = this.props.isFetching;
        return(
            <div id='zone-edit'>
                <h2>{this.props.zone}</h2>
                {this.props.zoneData&&'Serial: '+this.props.zoneData.soa.serial}
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps) => {
    const {zone} = ownProps;
    return {
        isFetching: state.isFetching,
        zoneData: state.zonesData[zone]
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ zoneGetFetch, zoneDelFetch}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ZoneEdit);
//export default DomainList;