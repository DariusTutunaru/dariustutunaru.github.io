// antet pagini reutilizabil 
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
        <a href="/index.html">Principal</a>
        <a href="/regiuneapalestina.html" class="active">Regiunea Palestina</a>
        <a href="#">De la începuturi</a>
        <a href="#">Dominația Otomană</a>
        <a href="#">Secolul XX</a>
        <a href="#">Conflictele contemporane</a>
        <a href="#">Atacul din 2023</a>
    </nav>

      `;
    }
}
customElements.define('main-header', Header);

//script pentru pagina activa

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

//sfarsit antet

//subsol pagini reutilizabil
class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-bottom">
            <p>Colegiul Național „George Coșbuc” Motru </p><br>
            <p>Elev Tutunaru Darius-Mihai</p><br>
            <p>Profesor coordonator Negrea Nicolae</p>
                    
        </div>
  
        `;
      }
}
customElements.define('main-footer', Footer);
//sfarsit subsol