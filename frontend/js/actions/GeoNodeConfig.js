/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CREATE_GEONODE_MAP = 'CREATE_GEONODE_MAP';
const UPDATE_GEONODE_MAP = 'UPDATE_GEONODE_MAP';
const GEONODE_MAP_CREATED = 'GEONODE_MAP_CREATED';
const GEONODE_MAP_CONFIG_LOADED = 'GEONODE_MAP_CONFIG_LOADED';
const GEONODE_MAP_UPDATED = 'GEONODE_MAP_UPDATED';
function createGeoNodeMap(about) {
    return {
        type: CREATE_GEONODE_MAP,
        about
    };
}
function updateGeoNodeMap() {
    return {
        type: UPDATE_GEONODE_MAP
    };
}

module.exports = {
    CREATE_GEONODE_MAP, GEONODE_MAP_CREATED, UPDATE_GEONODE_MAP, GEONODE_MAP_CONFIG_LOADED, GEONODE_MAP_UPDATED, createGeoNodeMap,
    updateGeoNodeMap

};
