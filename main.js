    // desktop dropdown
    const ddToggle = document.querySelector('.dropdown-toggle');
    const ddMenu = document.getElementById('dropdownMenu');
    if(ddToggle){
      ddToggle.addEventListener('click', (e)=>{
        e.stopPropagation();
        const expanded = ddToggle.getAttribute('aria-expanded') === 'true';
        ddToggle.setAttribute('aria-expanded', !expanded);
        ddMenu.classList.toggle('show');
      });
    }

    // close dropdown when clicking outside
    document.addEventListener('click', (e)=>{
      if(!e.target.closest('.dropdown')){
        ddMenu.classList.remove('show');
        if(ddToggle) ddToggle.setAttribute('aria-expanded','false');
      }
    });

    // hamburger mobile
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger && hamburger.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('show');
    });

    // mobile dropdown toggle
    const mobileDropBtn = document.getElementById('mobileDropdownToggle');
    const mobileSub = document.getElementById('mobileSubmenu');
    mobileDropBtn && mobileDropBtn.addEventListener('click', ()=>{
      mobileSub.classList.toggle('show');
    });

    // close mobile menu when link clicked (nice UX)
    document.querySelectorAll('.mobile-menu a').forEach(a=>{
      a.addEventListener('click', ()=> mobileMenu.classList.remove('show'));
    });

    const cards = document.querySelectorAll('.cha');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
});
function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("show");
}
