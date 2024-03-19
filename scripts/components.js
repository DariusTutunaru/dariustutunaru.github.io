// antet pagini reutilizabil 
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
        <a id="nav1" href="/index.html">Principal</a>
        <a id="nav2" href="/regiuneapalestina.html" class="active">Regiunea Palestina</a>
        <a id="nav3" href="/inceputuri.html">De la începuturi și Dominația Otomană</a>
        <a id="nav4" href="/sec20.html">Secolul XX</a>
        <a id="nav5" href="/m3.html"> Mileniul III</a>
        <a id="nav7" href="/feed.html">Ultimele știri</a>
        <a id="nav6" href="/bibliografie.html"> Bibliografie</a>
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
            
          <p>Profesori coordonatori:</p> <br>
          <p style="text-indent:30px;">Istorie - prof. Negrea Nicolae</p><br>
          <p style="text-indent:30px;">Informatică - prof. Giorgescu Emilia</p>
               
                    
        </div>
  
        `;
      }
}
customElements.define('main-footer', Footer);
//sfarsit subsol