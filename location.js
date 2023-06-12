//define the location DropDownList data
let locationData = [{
    item: 'Washington',
    subitems: ['Seattle', 'Silverdale', 'Olympia']
  },
  {
    item: 'Oregon',
    subitems: ['Portland', 'Salem', 'Oregon City']
  },
  {
    item: 'California',
    subitems: ['Los Angeles', 'San Francisco', 'San Diego']
  },
];

    // Populates the options for the state dropdown menu

window.onload = function() {
  let itemSel = document.getElementById("state");
  let subitemSel = document.getElementById("city");
  let selectedCityDiv = document.getElementById("selectedCityDiv");

  for (var x in locationData) {
    itemSel.options[itemSel.options.length] = new Option(locationData[x].item, x);
  }
  itemSel.onchange = function() {
    
    // Clear any previously selected city options
    subitemSel.length = 1;

    // Display correct city values according to state
    for (var y of locationData[this.value].subitems) {
      subitemSel.options[subitemSel.options.length] = new Option(y, y);
    }
  }


  subitemSel.onchange = function() {
    let selectedCity = subitemSel.value;
  
    if (selectedCity === 'Seattle') {
      selectedCityDiv.innerHTML = "Nestled in the vibrant city of Seattle, Washington, there is a renowned restaurant that offers an eclectic menu showcasing the rich flavors of the Pacific Northwest, captivating the taste buds of locals and tourists alike.";
    } else if (selectedCity === 'Silverdale') {
      selectedCityDiv.innerHTML = "The picturesque town of Silverdale, Washington boasts a charming restaurant that serves delectable dishes, providing a delightful dining experience for both residents and visitors.";
    } else if (selectedCity === 'Olympia') {
      selectedCityDiv.innerHTML = "Located in the charming city of Olympia, Washington, there is a hidden gem of a restaurant that exudes a cozy ambiance and serves delightful dishes crafted with locally sourced ingredients, providing an unforgettable dining experience for patrons.";
    } else if (selectedCity === 'Portland') {
      selectedCityDiv.innerHTML = "Immersed in the vibrant city of Portland, Oregon, culinary enthusiasts can explore a thriving dining scene where innovative flavors and farm-to-table concepts converge, offering a gastronomic adventure in the heart of the Pacific Northwest.";
    } else if (selectedCity === 'Salem') {
      selectedCityDiv.innerHTML = "Nestled in the historic city of Salem, Oregon, food enthusiasts can discover a diverse culinary landscape that showcases a fusion of local ingredients, creative recipes, and a warm atmosphere, making it a delightful destination for culinary exploration.";
    } else if (selectedCity === 'Oregon City') {
      selectedCityDiv.innerHTML = "Perched in the charming city of Oregon City, Oregon, lies a hidden culinary gem where patrons can indulge in a delightful dining experience, savoring a blend of inventive dishes and locally inspired flavors, all amidst the rich heritage and scenic beauty of the area.";
    } else if (selectedCity === 'Los Angeles') {
      selectedCityDiv.innerHTML = "Amidst the vibrant cityscape of Los Angeles, California, lies a culinary haven where food lovers can embark on a gastronomic journey, exploring a diverse menu that reflects the city's multicultural influences and embracing the spirit of innovation and culinary excellence.";
    } else if (selectedCity === 'San Francisco') {
      selectedCityDiv.innerHTML = "In the heart of San Francisco, California, a culinary gem awaits. This restaurant captures the essence of the city's vibrant food culture, serving up a tantalizing menu that showcases local ingredients, innovative flavors, and an ambiance that reflects the city's unique charm.";
    } else if (selectedCity === 'San Diego') {
      selectedCityDiv.innerHTML = "In sunny San Diego, California, a coastal culinary haven awaits. This restaurant captures the essence of the city's vibrant atmosphere, serving up fresh seafood, locally sourced ingredients, and a relaxed ambiance that embodies the essence of Southern California's dining culture.";
    } else {
      selectedCityDiv.innerHTML = "Please select a location"; 
    }
  };

}