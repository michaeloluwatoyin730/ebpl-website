(function(){
var m=document.getElementById('menu'),l=document.getElementById('links');
if(!m||!l)return;
m.addEventListener('click',function(){var o=l.classList.toggle('open');m.setAttribute('aria-expanded',o)});
l.addEventListener('click',function(e){if(e.target.tagName==='A')l.classList.remove('open')});
})();
