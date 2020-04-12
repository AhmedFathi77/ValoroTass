import axios from 'axios';
import * as Requests from './urls'

export const rejectPendingRequestsAPI = (id:string) =>{
    return axios.get(Requests.RejectedPendingRequestsURL(id));
}