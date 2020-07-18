function loadCards(json, city, month) {
  const eventCards = $(".cards");
  eventCards.empty();
  let filteredJson = json;

  if (city && month) {
    filteredJson = filteredJson
      .filter((element) => element.city === city)
      .filter((element) => element.date.split(".")[1] == month);
  }

  filteredJson.forEach((element) => {
    const date = element.date.split(".");
    const card = $(`<div class="card">
        <img
          class="card-image"
          src="${element.image}"
        />
        <div class="card-date">${date[0]}</div>
        <div class="card-name">${element.name}</div>
        <div class="card-favorite">
          <svg class="icon-favorite"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>`);

    eventCards.append(card);
  });
}
