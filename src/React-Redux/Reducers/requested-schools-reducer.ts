import { ISchoolRequest } from "../../components/status/singleItem";
import { reducer, on } from "ts-action";
import { getRequestedSchoolsSucceeded } from "../Actions/get-requested-schools-action";
import { acceptRequestedSchoolsSucceeded } from "../Actions/accept-requested-school-action";
import { rejectRequestedSchoolsSucceeded } from "../Actions/reject-requested-shool-action";


interface IState{
    requestsById : {
        [id: string]: ISchoolRequest;
    };
    requests: number[];

    acceptedRequests: ISchoolRequest[];
    rejectedRequests: ISchoolRequest[];
    
}

export const getRequestsSchoolsReducer = reducer<IState>(
    {
        requestsById: {},
        requests: [],
        acceptedRequests: [],
        rejectedRequests:[]
    },
    on(getRequestedSchoolsSucceeded, (state, { payload }) => ({
        ...state,
        requests: payload.map((item) =>  item.id),
        requestsById: payload.reduce( (acc , next) => ({
            ...acc,
            [next.id]: next
        }) , {})
    })),
    on(acceptRequestedSchoolsSucceeded , (state , {payload}) => ({
        ...state,
        acceptedRequests: [...state.acceptedRequests , state.requestsById[payload.id]]
    })),
    on(rejectRequestedSchoolsSucceeded , (state , {payload}) => ({
        ...state,
        rejectedRequests: [...state.rejectedRequests , state.requestsById[payload.id]]
    })),

)