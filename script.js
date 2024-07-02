let map;
let markers = [];

const dates = [
    { lat: 40.712776, lng: -74.005974, date: '2024-07-01' },
    { lat: 34.052235, lng: -118.243683, date: '2024-07-05' },
    { lat: 51.507351, lng: -0.127758, date: '2024-07-10' },
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.712776, lng: -74.005974 },
        zoom: 4,
    });

    addMarkers(dates);
    updateDateCount();
}

function addMarkers(dates) {
    dates.forEach((dateInfo) => {
        const marker = new google.maps.Marker({
            position: { lat: dateInfo.lat, lng: dateInfo.lng },
            map: map,
            title: `Date: ${dateInfo.date}`,
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<p>Date: ${dateInfo.date}</p>`,
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });

        markers.push(marker);
    });
}

function updateDateCount() {
    const dateCountElement = document.getElementById('date-count');
    dateCountElement.textContent = `${dates.length} dates available`;
}
