/* <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li> */

{/* <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
    </div> */}
const galleryItems = [
  { preview: 'https://files.slack.com/files-pri/T015T53DYUD-F01CRA3RRHC/1s.jpeg', fullview: 'https://files.slack.com/files-pri/T015T53DYUD-F01DMSZ8RB2/1l.jpeg', alt: "alt text 1" },
  { preview: 'https://files.slack.com/files-pri/T015T53DYUD-F01CY26R2KU/5s.jpeg', fullview: 'https://files.slack.com/files-pri/T015T53DYUD-F01D46YKS4U/5l.jpeg', alt: "alt text 2" },
  { preview: 'https://files.slack.com/files-pri/T015T53DYUD-F01DMSZM0EL/4s.jpeg', fullview: 'https://files.slack.com/files-pri/T015T53DYUD-F01CH9UNU9M/4l.jpeg', alt: "alt text 3" },
  { preview: 'https://files.slack.com/files-pri/T015T53DYUD-F01DMSZQ2UQ/3s.jpeg', fullview: 'https://files.slack.com/files-pri/T015T53DYUD-F01CY2708HY/3l.jpeg', alt: "alt text 4" },
  { preview: 'https://files.slack.com/files-pri/T015T53DYUD-F01CRA9NJES/2s.jpeg', fullview: 'https://files.slack.com/files-pri/T015T53DYUD-F01D474A928/2l.jpeg', alt: "alt text 5" },  
];


const preview = document.querySelector(".preview");
const img = document.querySelector(".image-gallery")
const fullView = document.querySelector(".fullview")


galleryItems.forEach((el) => {  
    preview.insertAdjacentHTML("beforeend", `
  <li><img src="${el.preview}" data-fullview="${el.fullview}" alt="alt text 1"></li>`); 
      
})
fullView.insertAdjacentHTML("afterbegin", `<img class = "full-img" src="${galleryItems[0].fullview}" alt="${galleryItems[0].alt}"></img>`);

const getPicture = function (e) {
    e.target.nodeName === "IMG"? document.querySelector(".full-img").src=e.target.dataset.fullview:"";    
}
        
preview.addEventListener("click",getPicture)