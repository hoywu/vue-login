import axios from 'axios';
import config from '@/config/config'

const $ = axios.create({
    baseURL: config.apiBaseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`,
    },
});

function updateToken() {
    $.defaults.headers.Authorization = `${localStorage.getItem('token')}`;
}

const api = {
    GetUserInfo() {
        if (!localStorage.getItem('token')) {
            return Promise.reject('No token');
        }
        updateToken();
        return $.get(config.apiGetUserInfo);
    },
    Login(username: string, password: string) {
        updateToken();
        return $.post(config.apiLogin, { username, password });
    },
    Register(username: string, password: string, nickname: string) {
        updateToken();
        return $.post(config.apiRegister, { username, password, nickname });
    },
};

export default api;
