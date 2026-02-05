"use strict";

document.addEventListener("DOMContentLoaded",()=>{

/* ---------- THEME ---------- */

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
 document.body.classList.add("dark");
 if(toggle) toggle.textContent="☀️";
}

if(toggle){
 toggle.onclick=()=>{
  document.body.classList.toggle("dark");
  const d=document.body.classList.contains("dark");
  localStorage.setItem("theme",d?"dark":"light");
  toggle.textContent=d?"☀️":"🌙";
 };
}

/* ---------- TYPING ---------- */

const typed=document.getElementById("typedName");
if(typed){
 const text="Sasi Kumar M";
 let i=0;
 function type(){
  if(i<text.length){
   typed.textContent+=text.charAt(i++);
   setTimeout(type,80);
  }
 }
 setTimeout(type,300);
}

/* ---------- REVEAL ---------- */

document.querySelectorAll(".reveal").forEach(r=>r.classList.add("active"));

/* ---------- BACK TO TOP ---------- */

const back=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
 if(back) back.style.display=window.scrollY>300?"block":"none";
});
if(back) back.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

/* ---------- CERT MODAL ---------- */

const modal=document.getElementById("certModal");
const frame=document.getElementById("certFrame");
const close=document.getElementById("closeCert");

document.querySelectorAll(".preview-btn").forEach(b=>{
 b.onclick=()=>{
  if(modal&&frame){
   frame.src=b.dataset.src;
   modal.style.display="flex";
  }
 };
});

if(close){
 close.onclick=()=>{
  modal.style.display="none";
  frame.src="";
 };
}

/* ESC close */

document.addEventListener("keydown",e=>{
 if(e.key==="Escape"&&modal){
  modal.style.display="none";
  if(frame) frame.src="";
 }
});

/* ---------- INSTALL ---------- */

let promptEvt;
window.addEventListener("beforeinstallprompt",e=>{
 e.preventDefault();
 promptEvt=e;
 const box=document.getElementById("installPrompt");
 if(box) box.style.display="flex";
});

const ib=document.getElementById("installBtn");
if(ib){
 ib.onclick=()=>{
  if(promptEvt) promptEvt.prompt();
 };
}

/* ---------- UPDATE ---------- */

if("serviceWorker" in navigator){
 navigator.serviceWorker.getRegistration().then(reg=>{
  if(!reg) return;
  if(reg.waiting) showUpdate(reg.waiting);
  reg.onupdatefound=()=>{
   const w=reg.installing;
   w.onstatechange=()=>{
    if(w.state==="installed") showUpdate(w);
   };
  };
 });
}

function showUpdate(w){
 const p=document.getElementById("updatePrompt");
 const b=document.getElementById("updateBtn");
 if(p&&b){
  p.style.display="flex";
  b.onclick=()=>w.postMessage("SKIP_WAITING");
 }
}

});
