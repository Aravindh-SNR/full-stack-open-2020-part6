import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../reducers/notification';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  
  return (
    notification &&
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;