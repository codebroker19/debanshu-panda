(()=>{
const aboutSection=document.querySelector(".about-section");
tabSection=document.querySelector(".about-tabs");
tabSection.addEventListener("click",(event)=>{
if(event.target.classList.contains("tab-item")&&!event.target.classList.contains("active"))
{
  const target=event.target.getAttribute("data-target");
  tabSection.querySelector(".active").classList.remove("outer-shadow","active");
  event.target.classList.add("active","outer-shadow");
  aboutSection.querySelector(".tab-content.active").classList.remove("active");
  aboutSection.querySelector(target).classList.add("active");

}
})
})();

(()=>{
  const filtercontainer=document.querySelector(".portfolio-filter");
  //const filteritem=document.querySelector(".filter-item");
  const portfolioitemscontainer=document.querySelector(".portfolio-items");
  const portfolioitems=document.querySelectorAll(".portfolio-item");
//const popup=document.querySelector(".portfolio-popup");
//  const prevBtn=popup.querySelector(".pp-prev");
//  const nextbtn=popup.querySelector(".pp-next");
//  const closebtn=popup.querySelector(".pp-close");
//  const projectdetailscontainer=popup.querySelector(".pp-details");
//  const projectdetailsbtn=popup.querySelector(".pp-project-details-btn");
  let item,slideindex,screenshots;
   filtercontainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-item")&&~event.target.classList.contains("active"))
    {
      filtercontainer.querySelector(".active").classList.remove("outer-shadow","active");
      event.target.classList.add("active","outer-shadow");
      //portfolioitemscontainer.querySelector("")
      const target=event.target.getAttribute("data-target");
console.log(target);
portfolioitems.forEach((item)=>{
  console.log(item.getAttribute("data-target"));
  if(target===item.getAttribute("data-target"))
  {
    item.classList.remove("hide");
    item.classList.add("show");
  }
  else{
    item.classList.remove("show");
    item.classList.add("hide");
  }
})
    }
  })
})();
const daynight=document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark")){
    daynight.querySelector("i").classList.add("fa-sun");
  }
  else{
    daynight.querySelector("i").classList.add("fa-moon");
  }
})
