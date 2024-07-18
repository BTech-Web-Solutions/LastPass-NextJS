chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setFormValues") {
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");
    if (emailInput) emailInput.value = request.email;
    if (passInput) passInput.value = request.password;
    sendResponse({ success: true });
  }
});
