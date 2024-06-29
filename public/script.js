var socket = io();

socket.on("from_server", () => {
  console.log('Collected New event from server');
  const div = document.createElement('div');
  div.innerText = 'New event from server';
  document.body.appendChild(div);
});