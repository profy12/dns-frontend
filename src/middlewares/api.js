import { 
    ZONE_LIST_FETCH,
    ZONE_ADD_FETCH,
    ZONE_DEL_FETCH,
    ZONE_GET_FETCH,
    zoneDel,
    zoneListRefresh,
    addZone,
    zoneGet,
    zoneNotFetching
} from "../actions";
/*
* Here we are catching fetch api and run action if need by the result of the api fetch
*
*/ 
const API_HEADERS = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
};
const apiMiddleware = (store) => (next) => (action) => {
    console.log('And it is really an api call');
    switch (action.type) {
        case ZONE_LIST_FETCH:
            const request = async() => {
                const response = await fetch('http://127.0.0.1:8000/api/zone/');
                const zoneList = await response.json();
                console.log('received response: ' + zoneList);
                let newAction = Object.assign({},zoneListRefresh());
                newAction.zones = zoneList;
                setTimeout(
                    () => {store.dispatch(newAction)}
                    ,3000
                );
            }
            request();
            return next(action);
        case ZONE_ADD_FETCH:
            const requestAdd = async() => {
                const response = await fetch('http://127.0.0.1:8000/api/zone/',{method: 'POST',headers: API_HEADERS, body: JSON.stringify({name:action.zone})});
                const body = await response.json();
                switch (response.status) {
                    case 200:
                    case 201:
                        console.log('received response: ' + body.message);
                        let addZoneAction = Object.assign({},addZone(action.zone));
                        setTimeout(
                            () => {store.dispatch(addZoneAction)}
                            ,3000
                            );
                        break;
                    case 409:
                        console.log('zone was already existing, do nothink more');
                        store.dispatch(zoneNotFetching());
                        break;
                    default:
                        console.log(`Unable to add zone ${body.message} code ${response.status}`);
                        store.dispatch(zoneNotFetching());
                }
            }
            requestAdd();
            return next(action);
            break;

        case ZONE_DEL_FETCH:
            const requestDel = async() => {
                const response = await fetch(`http://127.0.0.1:8000/api/zone/${action.zone}`,{method: 'DELETE',headers: API_HEADERS});
                const body = await response.json();
                switch (response.status) {
                    case 200:
                    case 201:
                        console.log('received response: ' + body.message);
                        let delZoneAction = Object.assign({},zoneDel(action.zone));
                        setTimeout(
                            () => {store.dispatch(delZoneAction)}
                            ,3000
                            );
                        break;
                    case 409:
                        console.log('zone was already deleted, do nothink more');
                        store.dispatch(zoneNotFetching());
                        break;
                    default:
                        console.log(`Unable to delete zone ${body.message} code ${response.status}`);
                        store.dispatch(zoneNotFetching());
                }
            }
            requestDel();
            return next(action);
            break;

        case ZONE_GET_FETCH:
            const requestGet = async() => {
                console.log(`api middleware: getch information about ${action.zone}`);
                const response = await fetch(`http://127.0.0.1:8000/api/zone/${action.zone}`,{method: 'GET',headers: API_HEADERS});
                const body = await response.json();
                switch (response.status) {
                    case 200:
                    case 201:
                        //console.log('received response: ' + body);
                        let getZoneAction = Object.assign({},zoneGet(action.zone,body));
                        setTimeout(
                            () => {store.dispatch(getZoneAction)}
                            ,3000
                            );
                        break;
                    case 404:
                        console.log('zone not found, do nothink more');
                        store.dispatch(zoneNotFetching());
                        break;
                    default:
                        console.log(`Unable to get zone data ${body.message} code ${response.status}`);
                        store.dispatch(zoneNotFetching());
                }
            }
            requestGet();
            return next(action);
            break;







        default:
            return next(action);
    }
}
export default apiMiddleware;