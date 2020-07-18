window.onload = function () {
  $.getJSON("./data/events.json", function (json) {
    const city = loadCities(json);
    initializeDropdown();
    loadCards(json);
  });
};
