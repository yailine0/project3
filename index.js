function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  // Default marker
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Chicago",
  });

  // Image marker 1
  const imgMarker1 = new google.maps.Marker({
    position: { lat: 41.835504, lng: -87.6237 },
    map: map,
    title: "Illinois Tech",
    icon: {
      url: "IIT.png",
      scaledSize: new google.maps.Size(40, 40),
    }
  });

  // Image marker 2
  const imgMarker2 = new google.maps.Marker({
    position: { lat: 41.866222, lng: -87.6168913 },
    map: map,
    title: "Field Museum",
    icon: {
      url: "dino.jpg",
      scaledSize: new google.maps.Size(40, 40),
    }
  });

  // Popup window
  const info = new google.maps.InfoWindow({
    content: "<strong>Welcome!</strong><br>This is your map page.",
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });

  map.setOptions({
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
  });
}

// Button alert
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questionBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("If you have questions, contact me at: ycano1@hawk.illinoistech.edu");
    });
  }
});
