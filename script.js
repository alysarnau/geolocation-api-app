const locationButton = document.querySelector('.btn')
const mapLink = document.querySelector('#map-link');
const stat = document.querySelector('#status')

locationButton.addEventListener('click', geoFindMe)

function geoFindMe() {
    mapLink.href ='';
    mapLink.textContent = '';

    function success(position) {
        console.log('success!')
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        stat.textContent = ''
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.innerHTML = `Latitude: ${latitude} °, <br /> Longitude: ${longitude} °`
    }

    function error() {
        stat.textContent = 'Oops, there was an error! Are you on Earth?'
        console.log('error')
    }

    if (!navigator.geolocation) {
        stat.textContent = `Sorry, Geolocation isn't supported in your browser. Try Firefox!`
    } else {
        stat.textContent = `Locating...`
        navigator.geolocation.getCurrentPosition(success, error)
    }
}