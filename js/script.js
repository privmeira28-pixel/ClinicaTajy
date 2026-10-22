(function(){
  var ba=document.getElementById('ba'); if(!ba) return;
  var r=ba.querySelector('input');
  function set(v){ba.style.setProperty('--pos',v+'%');}
  r.addEventListener('input',function(){set(r.value)});
  set(r.value);
})();
