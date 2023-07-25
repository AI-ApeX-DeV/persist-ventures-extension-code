document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('d').addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fill_form' });
      });
    });
  });
// This is the code by syed sharukhali farookali naziyabegum for persist ventures internship
        