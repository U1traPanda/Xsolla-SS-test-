function loadCities(json) {
  const cityDropdown = $("#custom-select-city");
  let cities = [];
  let i = 0;
  json.forEach((element) => {
    if (!cities.includes(element.city)) {
      cities.push(element.city);
      const option = $(`
      <option value="${++i}">${element.city}</option>
      `);
      cityDropdown.append(option);
    }
  });
  return cities[0];
}
