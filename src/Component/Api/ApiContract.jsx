import {axiosClient} from '../../App';


export const getContracts = async function (organizationId) {
    if(organizationId) {
        return axiosClient.get('/contract' + `${organizationId && '?organizationId=' + organizationId}`)
    } else {
        return axiosClient.get(`/contract`)
    } 
}

export const getContract = function (id) {
    return axiosClient.get(`/contract/${id}`)
}

export const removeContract = async (id) => axiosClient.delete(`/contract/${id}`)

export const postContract = async (contract) => axiosClient.post(`/contract/create`, contract)