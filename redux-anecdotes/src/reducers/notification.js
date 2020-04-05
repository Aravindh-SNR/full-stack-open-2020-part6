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

let timer;

export const setNotification = (message, seconds) => {
    timer && clearTimeout(timer);
    return dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            payload: {
                message
            }
        });

        timer = setTimeout(() => {
            dispatch({ type: 'REMOVE_NOTIFICATION' });
        }, seconds * 1000);
    };
};

export default notification;