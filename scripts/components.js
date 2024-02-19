// antet pagini reutilizabil 
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
        <a id="nav1" href="/index.html">Principal</a>
        <a id="nav2" href="/regiuneapalestina.html" class="active">Regiunea Palestina</a>
        <a id="nav3" href="/inceputuri.html">De la începuturi</a>
        <a id="nav4" href="#">Dominația Otomană</a>
        <a id="nav5" href="#">Secolul XX</a>
        <a id="nav6" href="#">Conflictele contemporane</a>
        <a id="nav7" href="#">Atacul din 2023</a>
    </nav>

      `;
    }
}
customElements.define('main-header', Header);
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