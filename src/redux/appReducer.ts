import { getUserDataTC } from "./authReducer"


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

const initialState: appReducerType = {
    initialized: false,
}

const appReducer = (state = initialState, action: initializedSuccessACType): appReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

// ACTION CREATOR
type initializedSuccessACType = {type: typeof INITIALIZED_SUCCESS}
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS})

// THUNK
export const initializedTC = () => (dispatch: any) => {
    let promise = dispatch(getUserDataTC())
    // когда будет получен ответ от сервера, то сделай dispatch(initializedSuccessAC()
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccessAC())
    })
}
export default appReducer


export type appReducerType = {
    initialized: boolean
}

