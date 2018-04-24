function selectCity() {
  if($('#State :selected').val() == 'AL' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Birmingham" value="Birmingham">Birmingham</option>`
      );
  } else if ($('#State :selected').val() == 'AK' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Alaska" value="Alaska">Alaska</option>`
      );
  } else if ($('#State :selected').val() == 'AZ' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Phoenix" value="Phoenix">Phoenix</option>
      <option label="Tucson" value="Tucson">Tucson</option>`
      );
  } else if ($('#State :selected').val() == 'AR' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Little Rock" value="Little Rock">Little Rock</option>`
      );
  } else if ($('#State :selected').val() == 'CA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option>N. California/N. Nevada</option>
      <option label="Los Angeles" value="Los Angeles">Los Angeles</option>
      <option label="San Deigo" value="San Diego">San Diego</option>
      <option label="San Francisco" value="San Francisco">San Francisco</option>`
      );
  } else if ($('#State :selected').val() == 'CO' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Denver" value="Denver">Denver</option>`
      );
  } else if ($('#State :selected').val() == 'CT' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Conneticut" value="Conneticut">Conneticut</option>
      <option label="New York/Tri-State Area" value="New York/Tri-State Area">New York/Tri-State Area</option>`
      );
  } else if ($('#State :selected').val() == 'DE' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Philadelphia" value="Philadelphia">Philadelphia</option>`
      );
  } else if ($('#State :selected').val() == 'FL' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Jacksonville" value="Jacksonville">Jacksonville</option>
      <option label="Miami" value="Miami">Miami</option>
      <option label="Orlando" value="Orlando">Orlando</option>
      <option label="Tampa" value="Tampa">Tampa</option>`
      );
  } else if ($('#State :selected').val() == 'GA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Atlanta" value="Atlanta">Atlanta</option>`
      );
  } else if ($('#State :selected').val() == 'HI' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Hawaii" value="Hawaii">Hawaii</option>`
      );
  } else if ($('#State :selected').val() == 'ID' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Utah, Montana & Idaho" value="Utah, Montana & Idaho">Utah, Montana & Idaho</option>`
      );
  } else if ($('#State :selected').val() == 'IL' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Chicago & Northern Illinois" value="Chicago & Northern Illinois">Chicago & Northern Illinois</option>
      <option label="Central Illinois" value="Central Illinois">Central Illinois</option>
      <option label="Saint Louis & Southern Illinois" value="Saint Louis & Southern Illinois">Saint Louis & Southern Illinois</option>`
      );
  } else if ($('#State :selected').val() == 'IN' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Indianapolis" value="Indianapolis">Indianapolis</option>`
      );
  } else if ($('#State :selected').val() == 'IA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Iowa" value="Iowa">Iowa</option>`
      );
  } else if ($('#State :selected').val() == 'KS' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Kansas City" value="Kansas City">Kansas City</option>`
      );
  } else if ($('#State :selected').val() == 'KY' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Lexington" value="Lexington">Lexington</option>
      <option label="Louisville" value="Louisville">Louisville</option>`
      );
  } else if ($('#State :selected').val() == 'LA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New Orleans" value="New Orleans">New Orleans</option>`
      );
  } else if ($('#State :selected').val() == 'ME' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New England" value="New England">New England</option>`
      );
  } else if ($('#State :selected').val() == 'MD' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Baltimore" value="Baltimore">Baltimore</option>
      <option label="Washington DC" value="Washington DC">Washington DC</option>`
      );
  } else if ($('#State :selected').val() == 'MA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Boston" value="Boston">Boston</option>
      <option label="New England" value="New England">New England</option>`
      );
  } else if ($('#State :selected').val() == 'MI' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Grand Rapids" value="Grand Rapids">Grand Rapids</option>
      <option label="Detroit" value="Detroit">Detroit</option>`
      );
  } else if ($('#State :selected').val() == 'MN' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Minneapolis - Saint Paul" value="Minneapolis - Saint Paul">Minneapolis - Saint Paul</option>`
      );
  } else if ($('#State :selected').val() == 'MS' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="" value="">New Orleans</option>
      <option label="New Orleans" value="New Orleans">Memphis</option>
      <option label="Tupelo" value="Tupelo">Tupelo</option>`
      );
  } else if ($('#State :selected').val() == 'MO' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Branson/ Springfield" value="Branson/ Springfield">Branson/ Springfield</option>
      <option label="Kansas City" value="Kansas City">Kansas City</option>
      <option label="Saint Louis" value="Saint Louis">Saint Louis</option>`
      );
  } else if ($('#State :selected').val() == 'MT' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Utah, Montana & Idaho" value="Utah, Montana & Idaho">Utah, Montana & Idaho</option>`
      );
  } else if ($('#State :selected').val() == 'NE' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Nebraska" value="Nebraska">Nebraska</option>`
      );
  } else if ($('#State :selected').val() == 'NV' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Las Vegas" value="Las Vegas">Las Vegas</option>
      <option label="N. California/N. Nevada" value="N. California/N. Nevada">N. California/N. Nevada</option>`
      );
  } else if ($('#State :selected').val() == 'NH' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New England" value="New England">New England</option>`
      );
  } else if ($('#State :selected').val() == 'NJ' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Northern New Jersey" value="Northern New Jersey">Northern New Jersey</option>
      <option label="Philadelphia" value="Philadelphia">Philadelphia</option>
      <option label="New York/Tri-State Area" value="New York/Tri-State Area">New York/Tri-State Area</option>`
      );
  } else if ($('#State :selected').val() == 'NM' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New Mexico" value="New Mexico">New Mexico</option>`
      );
  } else if ($('#State :selected').val() == 'NC' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Charlotte" value="Charlotte">Charlotte</option>
      <option label="Raleigh" value="Raleigh">Raleigh</option>`
      );
  } else if ($('#State :selected').val() == 'ND' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="North Dakota" value="North Dakota">North Dakota</option>`
      );
  } else if ($('#State :selected').val() == 'OH' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Cincinnati" value="Cincinnati">Cincinnati</option>
      <option label="Cleveland" value="Cleveland">Cleveland</option>
      <option label="Columbus" value="Columbus">Columbus</option>
      <option label="Dayton" value="Dayton">Dayton</option>
      <option label="Toledo" value="Toledo">Toledo</option>
      <option label="Youngstown" value="Youngstown">Youngstown</option>`
      );
  } else if ($('#State :selected').val() == 'OK' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Oklahoma" value="Oklahoma">Oklahoma</option>`
      );
  } else if ($('#State :selected').val() == 'OR' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Portland" value="Portland">Portland</option>`
      );
  } else if ($('#State :selected').val() == 'PA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Philadelphia" value="Philadelphia">Philadelphia</option>
      <option label="Pittsburgh" value="Pittsburgh">Pittsburgh</option>`
      );
  } else if ($('#State :selected').val() == 'RI' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New England" value="New England">New England</option>`
      );
  } else if ($('#State :selected').val() == 'SC' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="South Carolina" value="South Carolina">South Carolina</option>`
      );
  } else if ($('#State :selected').val() == 'SD' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="The Dakotas" value="The Dakotas">The Dakotas</option>`
      );
  } else if ($('#State :selected').val() == 'TN' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Memphis" value="Memphis">Memphis</option>
      <option label="Nashville" value="Nashville">Nashville</option>`
      );
  } else if ($('#State :selected').val() == 'TX' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Beaumont" value="Beaumont">Beaumont</option>
      <option label="Corpus Christi/ Hidalgo/ Laredo" value="Corpus Christi/ Hidalgo/ Laredo">Corpus Christi/ Hidalgo/ Laredo</option>
      <option label="Dallas - Fort Worth" value="Dallas - Fort Worth">Dallas - Fort Worth</option>
      <option label="El Paso" value="El Paso">El Paso</option>
      <option label="Houston" value="Houston">Houston</option>
      <option label="Austin" value="Austin">Austin</option>
      <option label="San Antonio" value="San Antonio">San Antonio</option>`
      );
  } else if ($('#State :selected').val() == 'UT' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Utah, Montana & Idaho" value="Utah, Montana & Idaho">Utah, Montana & Idaho</option>`
      );
  } else if ($('#State :selected').val() == 'VT' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="New England" value="New England">New England</option>`
      );
  } else if ($('#State :selected').val() == 'VA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Virginia" value="Virginia">Virginia</option>`
      );
  } else if ($('#State :selected').val() == 'WA' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Greater Seattle Area" value="Greater Seattle Area">Greater Seattle Area</option>`
      );
  } else if ($('#State :selected').val() == 'DC' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Wash. DC, Maryland, N. Virginia" value="Wash. DC, Maryland, N. Virginia">Wash. DC, Maryland, N. Virginia</option>`
      );
  } else if ($('#State :selected').val() == 'WV' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="West Virginia" value="West Virginia">West Virginia</option>`
      );
  } else if ($('#State :selected').val() == 'WI' ) {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="Milwaukee" value="Milwaukee">Milwaukee</option>`
      );
  } else {
    $('.js-city').empty();
    $('.js-city').append(
      `<option label="United States" value="United States">United States</option>`
      );
  };


}

  $('.js-state').on('change', function () {
  selectCity();
  });




const TICKETMASTER_SEARCH_URL = 'https://app.ticketmaster.com/discovery/v2/events';

function getDataFromApi(searchTerm, callback) {
  const query = {
    apikey: 'hLjhg103v5QEc3sRKxQvf5UH4urYHvuX',
    stateCode: $('.js-state').val(),
    city: $('.js-city').val(),
    keyword: $('.js-genre').val(),
  }
  $.getJSON(TICKETMASTER_SEARCH_URL, query, callback);
}


function renderResult(result) {
  return`
    <div class="card">
      <div class="name">${result.name}</div>
      <div class="date">${result.dates.start.localDate}</div>
      <div class="venue">${result._embedded.venues[0].name}</div>
      <img src="${result.images[0].url}" class="image">
      <a href="${result.url}">See Tickets</a><br>
    </div>
  `;
  console.log(`result is rendered`);
}

function displayTicketMasterSearchData(data) {
  console.log(data);
  const results = data._embedded.events.map(_embedded => renderResult(_embedded));
  $('.js-search-results').html(results);
}



function watchSubmit() {
  
  $('.js-search-form').submit(event => {
    event.preventDefault();
    document.getElementById("h1").style.fontSize = "30px";
    $('.js-search-form').remove();
    document.getElementById("h2").style.visibility = "visible";
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val("");
    $('.js-search-result').prop('hidden', false);
    getDataFromApi(query, displayTicketMasterSearchData);
  });
}

$(watchSubmit);



