const menuIcon=document.getElementById("menu-icon");
const navLinks=document.getElementById("nav-links");

menuIcon.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open");
});

function showDateTime(){
    const now= new Date();
    const dateTimeString=now.toLocaleString();
    document.getElementById("datetime").textContent=dateTimeString;
}
// Update every second
setInterval(showDateTime,1000);
// Show immediately when page loads
showDateTime();