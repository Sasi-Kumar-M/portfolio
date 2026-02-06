document.addEventListener("DOMContentLoaded",()=>{

// Typing name
let t="Sasi Kumar M",i=0;
(function type(){if(i<t.length){typedName.textContent+=t[i++];setTimeout(type,80)}})();

// Certificate preview
document.querySelectorAll(".preview-btn").forEach(b=>{
 b.onclick=()=>{
  certFrame.src=b.dataset.src;
  certModal.style.display="block";
 };
});
closeCert.onclick=()=>{certModal.style.display="none";certFrame.src=""};

// Back to top
window.onscroll=()=>{backToTop.style.display=scrollY>300?"block":"none"};
backToTop.onclick=()=>scrollTo({top:0,behavior:"smooth"});

// Contact form validation + success
const form=document.getElementById("contactForm");
const success=document.getElementById("formSuccess");

if(form){
 form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=nameEl();
  const email=emailEl();
  const phone=phoneEl();
  const msg=msgEl();

  if(name.length<2||!email.includes("@")||phone.length<8||msg.length<5){
    alert("Please fill all fields correctly");
    return;
  }

  fetch(form.action,{method:"POST",body:new FormData(form)})
  .then(()=>{form.reset();success.style.display="block";})
  .catch(()=>alert("Unable to send"));
 });
}

// Helpers
function nameEl(){return document.getElementById("name").value.trim()}
function emailEl(){return document.getElementById("email").value.trim()}
function phoneEl(){return document.getElementById("phone").value.trim()}
function msgEl(){return document.getElementById("message").value.trim()}

// WhatsApp click-to-chat (subject + mobile/desktop + toast)
const waBtn=document.getElementById("waChatBtn");
const toast=document.getElementById("waToast");
const yourNumber="919164657851";

function isMobile(){
 return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if(waBtn){
 waBtn.addEventListener("click",()=>{
  const phone=phoneEl();
  if(phone.length<8){alert("Enter phone number");return;}

  const subject="Portfolio Contact";
  const text=encodeURIComponent(
   `Subject: ${subject}\nName: ${nameEl()}\nPhone: ${phone}\n\n${msgEl()}`
  );

  const url=isMobile()
   ? `whatsapp://send?phone=${yourNumber}&text=${text}`
   : `https://wa.me/${yourNumber}?text=${text}`;

  toast.style.display="block";
  setTimeout(()=>toast.style.display="none",2000);

  window.open(url,"_blank");
 });
}

});
