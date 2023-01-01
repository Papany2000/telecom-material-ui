import {axiosClient} from '../../App';


export const getMapStates = async function (mapStateId) {
    if(mapStateId) {
        return axiosClient.get('/mapState' + `${mapStateId && '?mapStateId=' + mapStateId}`)
    } else {
        return axiosClient.get(`/mapState`)
    } 
}

export const getMapState = function (id) {
    return axiosClient.get(`/mapState/${id}`)
}

export const removeMapState = async (id) => axiosClient.delete(`/mapStates/${id}`)

export const postMapState = async (mapStates) => axiosClient.post(`/mapState/create`, mapStates)