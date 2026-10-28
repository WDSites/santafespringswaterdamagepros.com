(function(){
var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
function openM(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
function closeM(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
if(t&&d&&o){
t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?closeM():openM();});
if(c)c.addEventListener('click',closeM);
o.addEventListener('click',closeM);
d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeM);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
}
document.querySelectorAll('.faq-q').forEach(function(b){
b.addEventListener('click',function(){var it=b.parentNode;var open=it.classList.toggle('open');b.setAttribute('aria-expanded',open?'true':'false');});
});
})();
