export default function ws_connected(store) {
var socket = new WebSocket("ws://app.immortal.host:80");

socket.onopen = function() {
    store.dispatch({ type: 'EXTERNAL_CONNECTED' });
};

socket.onclose = function(event) {
    if (event.wasClean) {
        store.dispatch({ type: 'EXTERNAL_CLOSED', payload: {code: event.code, reason: event.reason} });
    } else {
        store.dispatch({ type: 'EXTERNAL_TERMINATED', payload: {code: event.code, reason: event.reason} });
    }
};

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    store.dispatch({ type: data.type || 'EXTERNAL_RECEIVED', payload: data.payload })
};

socket.onerror = function(error) {
    store.dispatch({ type: 'EXTERNAL_ERROR', payload: error.message });
};

function send(type, payload) {
    const departingAction = {type: type || 'EXTERNAL_SENT', payload: payload };
    const data = JSON.stringify(departingAction);
    store.dispatch(departingAction);
    socket.send(data);
};

store.ws_send = send;

return store;
}