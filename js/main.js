/* Headspace — interações: menu mobile, nav e animações (GSAP + ScrollTrigger).
   Requer gsap e ScrollTrigger carregados antes (CDN no index.html). */
(function(){
  var nav=document.getElementById('nav'),b=document.getElementById('burger');
  function set(o){nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
  b.addEventListener('click',function(){set(!nav.classList.contains('open'))});
  document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>8)},{passive:true});

  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)',function(){
    // entrada do hero
    gsap.timeline({defaults:{ease:'power3.out',duration:.8}})
      .from('.hero .eyebrow,.hero h1,.hero .lead,.hero .cta-row',{y:22,opacity:0,stagger:.1})
      .from('.hero .art img',{opacity:0,scale:.95,duration:1},'<.15');
    // flutuação sutil
    gsap.to('.hero .art',{y:-8,duration:3.2,ease:'sine.inOut',yoyo:true,repeat:-1});
    // revelar seções ao rolar (uma vez)
    gsap.set('[data-r]',{y:26,opacity:0});
    ScrollTrigger.batch('[data-r]',{start:'top 90%',once:true,
      onEnter:function(els){gsap.to(els,{y:0,opacity:1,duration:.7,stagger:.12,ease:'power2.out',overwrite:true})}});
    // parallax leve no card de ajuda
    gsap.to('.dec',{yPercent:-8,ease:'none',scrollTrigger:{trigger:'.help',start:'top bottom',end:'bottom top',scrub:.6}});
  });
})();
