import { union } from "ts-action";
import { call, put, takeLatest  } from "redux-saga/effects";
import { getRequestedSchoolsSucceeded, getRequestedSchoolsFailed } from "../Actions/get-requested-schools-action";

import { getPendingRequestsAPI } from "../../Axios/get-pending-requests";
import { getRequestedSchoolsAction } from "../Actions";

function* getPendingRequestsSaga() {
    try {
        const res = yield call(getPendingRequestsAPI);
        console.log('it works bitch !! , ' , res);
        yield put(getRequestedSchoolsSucceeded(res));
    } catch (e) {
        yield put(getRequestedSchoolsFailed(e));
    } 
}

export function* watchGetPendingRequestsSaga() {
    yield takeLatest(getRequestedSchoolsAction.requested, getPendingRequestsSaga);
}
