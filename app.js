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
  const portfolioitems=document.querySelectorAll(".portfolio-item");

   filtercontainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-item")&&~event.target.classList.contains("active"))
    {
      filtercontainer.querySelector(".active").classList.remove("outer-shadow","active");
      event.target.classList.add("active","outer-shadow");
      
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

  var x=document.getElementsByClassName("dark");
  var y=document.getElementsByClassName("btn-1");
  var z=document.getElementsByClassName("edu/wrk");
  if(document.body.classList.contains("dark"))
    {
  
  for(var i=0;i<x.length; i++)
  {
    x[i].style.color="#F7F7F7";
  }
  for(var j=0;j<z.length;j++)
  {z[j].style.color="#F7F7F7";}
}
if(!document.body.classList.contains("dark"))
{
  for(var i=0;i<x.length;i++)
  {x[i].style.color="#666666";}
  for(var j=0;j<y.length;j++)
    y[j].style.color="#fb9300";
  }
  for(var k=0;k<z.length;k++)
  {z[k].style.color="#fb9300";}

})

window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark")){
    daynight.querySelector("i").classList.add("fa-sun");
  }
  else{
    daynight.querySelector("i").classList.add("fa-moon");
    
  }
})
