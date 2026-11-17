// 只做两种动效：위로(上移淡入) / 줌인(图片缓慢放大)
(function(){
  const io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:.15, rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.up, .zoom').forEach(function(el){ io.observe(el); });
})();
