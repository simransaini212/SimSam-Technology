let userMapLink = "Not provided";

// Share Live Location Button Logic
document.getElementById('geoBtn').addEventListener('click', function() {
  const statusSpan = document.getElementById('locationStatus');
  
  if (!navigator.geolocation) {
    statusSpan.innerText = "Geolocation not supported";
    return;
  }

  statusSpan.innerText = "Fetching location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      userMapLink = `https://maps.google.com/?q=${lat},${lng}`;
      statusSpan.innerText = "Location pinned!";
      statusSpan.style.color = "#16a34a";
    },
    (error) => {
      statusSpan.innerText = "Location access denied. Please type full address.";
      statusSpan.style.color = "#dc2626";
    }
  );
});

// Form Submission to WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const issue = document.getElementById('custIssue').value;
  const address = document.getElementById('custAddress').value;
  const locality = document.getElementById('custLocality').value;

  const myPhoneNumber = "918168140200";

  const message = `*New Doorstep Service Request*%0A%0A` +
                  `*Name:* ${encodeURIComponent(name)}%0A` +
                  `*Phone:* ${encodeURIComponent(phone)}%0A` +
                  `*Issue:* ${encodeURIComponent(issue)}%0A` +
                  `*Full Address:* ${encodeURIComponent(address)}%0A` +
                  `*Locality/Pincode:* ${encodeURIComponent(locality)}%0A` +
                  `*Google Map Link:* ${encodeURIComponent(userMapLink)}`;

  const whatsappURL = `https://wa.me/${myPhoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
});