import {axiosClient} from '../../App';

export const login = function (loginParams) {
    return axiosClient.post(`/auth/login`, loginParams)
}