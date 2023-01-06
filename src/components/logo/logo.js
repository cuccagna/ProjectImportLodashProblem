export class Logo{
   constructor(idLogo,classLogo="") {
      this.idLogo = idLogo;
      this.classLogo = classLogo;
   }
   render(container) {
      const logoImg = document.createElement("img");
      logoImg.id = this.idLogo;
      if(this.classLogo)
         logoImg.classList.add(this.classLogo)
      
      container.insertBefore(logoImg, container.firstChild);
   }
}