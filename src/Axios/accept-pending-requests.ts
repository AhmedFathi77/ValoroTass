import axios from 'axios';
import * as Requests from './urls'

export const acceptPendingRequestsAPI = (id:string) =>{
    return axios.get(Requests.AcceptPendingRequestsURL(id));
}