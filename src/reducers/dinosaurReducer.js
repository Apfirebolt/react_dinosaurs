const dinosaurReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DINOSAURS_REQUEST':
            return { 
                ...state, 
                loading: true, 
                error: null 
            };
        case 'FETCH_DINOSAURS_SUCCESS':
            return { 
                ...state, 
                loading: false, 
                dinosaurs: action.payload, 
                error: null 
            };
        case 'FETCH_DINOSAURS_FAILURE':
            return { 
                ...state, 
                loading: false, 
                error: action.payload 
            };
        case 'RESET_DINOSAURS':
            return { 
                dinosaurs: [], 
                loading: false, 
                error: null 
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default dinosaurReducer;