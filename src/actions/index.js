export const ZONE_ADD = 'ZONE_ADD';
export const ZONE_DEL = 'ZONE_DEL';
export const ZONE_GET = 'ZONE_GET';
export const ZONE_ADD_FETCH = 'ZONE_ADD_FETCH';
export const ZONE_DEL_FETCH = 'ZONE_DEL_FETCH';
export const ZONE_GET_FETCH = 'ZONE_GET_FETCH';
export const ZONE_LIST_FETCH = 'ZONE_LIST_FETCH';
export const ZONE_LIST_REFRESH = 'ZONE_LIST_REFRESH';
export const ZONE_NOT_FETCHING = 'ZONE_NOT_FETCHING';

export const addZone = (zone) => (
    {
        type: ZONE_ADD,
        zone: zone
    }
);
export const zoneDel = (zone) => (
    {
        type: ZONE_DEL,
        zone: zone
    }
);
export const zoneGet = (zone,zoneData) => (
    {
        type: ZONE_GET,
        zone: zone,
        zoneData: zoneData
    }
);
export const zoneAddFetch = (zone) => (
    {
        type: ZONE_ADD_FETCH,
        zone: zone
    }
)
export const zoneDelFetch = (zone) => (
    {
        type: ZONE_DEL_FETCH,
        zone: zone
    }
)
export const zoneGetFetch = (zone) => (
    {
        type: ZONE_GET_FETCH,
        zone: zone
    }
)
export const zoneListFetch = () => (
    {
        type: ZONE_LIST_FETCH
    }
);
export const zoneNotFetching = () => (
    {
        type: ZONE_NOT_FETCHING
    }
);

export const zoneListRefresh = () => (
    {
        type: ZONE_LIST_REFRESH,
        zones: []
    }
)