import React from 'react';

import { notification, message } from 'antd';

const SocketContext = React.createContext();

function handleConnectionChange(event) {
  if (event.type === 'offline') {
    notification.error({
      message: 'Sem conexão com a internet.',
      key: 'no-internet',
    });
  }
  if (event.type === 'online') {
    notification.close('no-internet');
    message.success('A conexão com a internet foi reestabelecida.');
  }
}
window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);

export default SocketContext;
