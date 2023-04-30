if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceworker.js")
    .then((reg) => console.log("service worder registerd", reg))
    .catch((err) => console.log("service worker not registered", err));
}

navigator.serviceWorker.register("/service-worker.js", {
  scope: "http://localhost:3000/",
});
