baguetteBox.run('.gallery');

const search = new Filter('search', 'data-caption'); 
  
/* MY ATTEMPT AT SEARCHBAR, GOING TO TRY AGAIN AT A LATER TIME

  let imageSearch = document.querySelector('#search');
  let images = document.querySelector('a');

  imageSearch.addEventListener('keyup', e => {
    let value = e.target.value.toLowerCase();
    console.log(value); 
    if (images.style.dataset.data-caption.includes(imageSearch.value)) {
        images.style.display = "inline";
    } 
  }) 

*/