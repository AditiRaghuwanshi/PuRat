document.getElementById('messageInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (message !== '') {
      displayMessage(message);
      input.value = '';
  }
}

function displayMessage(message) {
  const messagesContainer = document.getElementById('messages');

  const messageElement = document.createElement('div');
  messageElement.className = 'message self';
  messageElement.textContent = message;
  messageElement.setAttribute('contenteditable', 'true'); // Make the message editable

  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}
