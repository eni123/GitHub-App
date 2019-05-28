import {LOG_OUT} from './types';

export function logout() {
    return {
        type: LOG_OUT,
        payload:{}
    }
}