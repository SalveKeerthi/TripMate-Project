document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const type = params.get('type');

  if (!id || !type) {
    document.getElementById('place-title').textContent = 'Invalid URL';
    return;
  }

  try {
    const doc = await db.collection(type + 's').doc(id).get(); // e.g., 'restaurants'
    if (!doc.exists) {
      document.getElementById('place-title').textContent = 'Place not found';
      return;
    }

    const data = doc.data();
    document.getElementById('place-title').textContent = data.name || 'Place Details';

    const template = document.getElementById(`${type}-template`);
    const clone = template.content.cloneNode(true);
    fillTemplate(clone, data, type);
    document.getElementById('content').appendChild(clone);
  } catch (err) {
    console.error(err);
    document.getElementById('place-title').textContent = 'Error loading data';
  }
});

function fillTemplate(clone, data, type) {
  switch (type) {
    case 'restaurant':
      clone.querySelector('.address').textContent = data.address || '';
      clone.querySelector('.cuisine').textContent = data.cuisine || '';
      clone.querySelector('.hours').textContent = data.openingHours || '';
      clone.querySelector('.dishes').textContent = (data.popularDishes || []).join(', ');
      break;
    case 'hotel':
      clone.querySelector('.address').textContent = data.address || '';
      clone.querySelector('.rating').textContent = data.rating || '';
      clone.querySelector('.amenities').textContent = (data.amenities || []).join(', ');
      break;
    case 'transport':
      clone.querySelector('.mode').textContent = data.mode || '';
      clone.querySelector('.location').textContent = data.location || '';
      clone.querySelector('.availability').textContent = data.availability || '';
      break;
  }
}
