const notification = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.payload.message;
        case 'REMOVE_NOTIFICATION':
            return null;
        default:
            return state;
    }
};

export const setNotification = (message, seconds) => {
    return dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            payload: {
                message
            }
        });

        setTimeout(() => {
            dispatch({ type: 'REMOVE_NOTIFICATION' });
        }, seconds * 1000);
    };
};

export default notification;