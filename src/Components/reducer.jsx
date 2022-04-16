import * as types from "./type"

const initialState = {
    loading : false,
    err : "",
    country : {},
    city : {}
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(types.Country_add_request): return {...state, loading: true}

        case(types.Country_added) : return {...state, loading: false, country : action.payload.country}

        case(types.Country_add_fail) : return {...state, loading : false, err : action.payload.err}

        case(types.City_add_request): return {...state, loading: true}

        case(types.City_added) : return {...state, loading: false, city : action.payload.city}

        case(types.City_add_fail) : return {...state, loading : false, err : action.payload.err}


        default : return state
    }
}

export default reducer;