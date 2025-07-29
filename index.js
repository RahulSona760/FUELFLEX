const options = {
  method: 'GET',
  headers: {
     'X-RapidAPI-Key': '89c4e8c212mshdfea8f0e78652cfp1c3520jsn010410bc3483', // 👈 your key
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('body-parts-list');
    data.forEach(bodyPart => {
      const li = document.createElement('li');
      li.textContent = bodyPart;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// menu-Button----------------------

  
 
  // Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakpoints:{
   0:{
    slidesPerView:1
   },
   768:{
    slidesPerView:2
   },
   1024:{
    slidesPerView:3
   },
   } 
});


// chat_Box=============


// Function to handle user input
