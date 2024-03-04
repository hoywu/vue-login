import $ from '@/utils/api';

export function jumpIfTokenValid(url: string): Promise<void> {
    return $.GetUserInfo().then(
        resp => {
            if (resp.data.code === 0) {
                location.href = url;
                return Promise.resolve();
            }
            localStorage.removeItem('token');
            return Promise.reject(resp.data.msg);
        },
        err => {
            localStorage.removeItem('token');
            return Promise.reject(err);
        }
    );
}
