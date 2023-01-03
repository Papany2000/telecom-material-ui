import { axiosClient } from '../../utils/axiosClient';

export const getOrders = async function (contractId) {
    if (contractId) {
        return axiosClient.get(`/orders${contractId && '?contractId=' + contractId}`)
    } else {
        return axiosClient.get(`/orders`)
    }
}

export const getOrder = function (id) {
    return axiosClient.get(`/orders/${id}`)
}

export const removeOrder = async (id) => axiosClient.delete(`/orders/${id}`)

export const postOrder = async (order) => axiosClient.post(`/orders/create`, order)