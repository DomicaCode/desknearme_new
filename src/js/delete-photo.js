import apiFetch from './apiFetch';

const deletePhoto = (event) => {
  event.preventDefault();
  const photoID = event.target.dataset.propertyPhotoId;
  document.getElementById('remove_image_tr_'+photoID).style.display = 'none';
  return apiFetch('/dashboard/photos/delete', {
    method: 'POST',
    body: JSON.stringify({ photo: { id: photoID } })
  });
};

const statusSelector = Array.from(document.querySelectorAll('[data-property-photo-id]'));
statusSelector.forEach(button => button.addEventListener('click', deletePhoto, true));
