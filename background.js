chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fillForm
    });
  });
  // code by syed sharukhali farookali naziyabegum for persist ventures internship
  function fillForm() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'fill_form' });
    });
  }

  // background.js

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/background.js') // Replace with the correct path to your background.js file
      .then(registration => {
        console.log('Service worker registered!', registration);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  }
  
  // Add event listeners to keep the service worker active
  self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });
    // code by syed sharukhali farookali naziyabegum for persist ventures internship
  // Add event listeners to respond to fetch and message events
  self.addEventListener('fetch', event => {
    // Implement your fetch event handling logic here
  });
  
  self.addEventListener('message', event => {
    // Implement your message event handling logic here
  });
  
  
    // code by syed sharukhali farookali naziyabegum for persist ventures internship