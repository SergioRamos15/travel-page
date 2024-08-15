document.addEventListener('DOMContentLoaded', function () {
  const chatbotIcon = document.getElementById('chatbot-icon');
  const chatbot = document.getElementById('chatbot');

  chatbotIcon.addEventListener('click', function () {
      chatbot.classList.toggle('active');
  });
});
  