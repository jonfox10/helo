const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_ID = 'UPDATE_ID'

const GET_USER_INFO = 'GET_USER_INFO';


export function getUserInfo(username, profile, userId) {
    return {
        type: GET_USER_INFO,
        payload: username, profile, userId
    }
}

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updateProfile(profile) {
    return {
        type: UPDATE_PROFILE,
        payload: profile
    }
}

export function updateId(userId) {
    return {
        type: UPDATE_ID,
        payload: userId
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO: 
            return {...state, createUser: action.payload}
            
        case UPDATE_USERNAME:
            return {...state, updateUsername: action.payload}
        
        case UPDATE_PROFILE:
            return {...state, updateProfile: action.payload}

        case UPDATE_ID:
            return {...state, updateId: action.payload}
    
        default:
            return state
    }
} 