mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  center: listing.geometry.coordinates,
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h6>${listing.title}</h6><p>Exact Location will be provided after booking</p>`))
  .addTo(map);
