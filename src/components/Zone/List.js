import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { zoneListFetch, zoneDelFetch } from '../../actions';
import ZoneThumbnail from './Thumbnail';


class ZoneList extends React.Component {
    constructor(props) {
        super(props);
    }
    refresh = () => {
        console.log("refreshing data");
        this.props.zoneListFetch();
    }
    delete = (event) => {
        this.props.zoneDelFetch(event.target.value);
        console.log(`suppression de ${event.target.value}`);
    }
    componentWillMount(){
        this.refresh();
    }
    render() {
        const isFetching = this.props.isFetching;
        return(
            <div id='list-view'>
                <div id='list-items'>
                    {this.props.zones.map(dom=>
                    <div className='zones' key={dom}>
                        <ZoneThumbnail zone={dom} />
                        <button value={dom} onClick={this.delete} disabled={isFetching}>X
                        </button>
                    </div>)}
                </div>
                <button onClick={this.refresh} disabled={isFetching} className="press press-orange press-ghost"><i className="fas fa-sync"></i>Refresh</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        zones: state.zones,
        isFetching: state.isFetching
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ zoneListFetch, zoneDelFetch}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ZoneList);
//export default DomainList;