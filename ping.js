function sendPing() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://aternos.org/ajax/server/start?headstart=false&access-credits=false&TOKEN=2FwyXGszACVxjJFLtWxT&SEC=nuq8fdof3ok00000%3A9tz6kbm9f6p00000&SERVER=FYCDAod8ntynJn1Q', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Ping sent successfully');
    } else {
      console.error('Failed to send ping. Status code: ' + xhr.status);
    }
  };
  xhr.send();
}

sendPing();
setInterval(sendPing, 2 * 60 * 1000);
