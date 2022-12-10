import axios from 'axios';
import { serverUrl } from '..//Config'


export const getMapStates = async function (mapStateId) {
    if(mapStateId) {
        return axios.get(serverUrl + '/mapState' + `${mapStateId && '?mapStateId=' + mapStateId}`)
    } else {
        return axios.get(`${serverUrl}/mapState`)
    } 
}

export const getMapState = function (id) {
    return axios.get(`${serverUrl}/mapState/${id}`)
}

export const removeMapState = async (id) => axios.delete(`${serverUrl}/mapStates/${id}`)

export const postMapState = async (mapStates) => axios.post(`${serverUrl}/mapState/create`, mapStates)