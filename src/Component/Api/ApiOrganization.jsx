import {axiosClient} from '../../App';

export const getOrganizations = async function (page, limit) { 
    //throw new Error('это моя ошибка')
    if(page) {
        return axiosClient.get('/organization' + `${page && '?page=' + page}` + `${limit && '&limit=' + limit || 10}`)
    } else {
        return axiosClient.get(`/organization`)
    } 
}

export const getOrganization = function (id) {
    return axiosClient.get(`/organization/${id}`)
}

export const removeOrganization = async (id) => axiosClient.delete(`/organization/${id}`)

export const postOrganization = async (organization) => { 
    return axiosClient.post(`/organization/create`, organization)
}

