import { nav } from "@/lib/site";

export function Header() {
  return (
    <div className="wrap">
      <nav className="nav" id="site-nav">
        <a href="/" className="brand">
          <img className="mark" src="/favicon.svg" alt="ProMarket" title="ProMarket" width={32} height={32} fetchPriority="low" />
          ProMarket
        </a>
        <button type="button" className="nav-toggle" aria-expanded="false" aria-controls="site-nav-links" aria-label="Menu" id="nav-toggle">
          Menu
        </button>
        <div className="nav-links" id="site-nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/audit" className="btn">
            Audit de stack
          </a>
        </div>
      </nav>
    </div>
  );
}

export function CookieBar() {
  return (
    <div className="cookie" id="cookie-bar" role="dialog" aria-label="Cookies" hidden>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous consentez aux cookies. Refuser
        bloque les cookies non essentiels.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn ghost" data-choice="no">
          Refuser
        </button>
        <button type="button" className="btn" data-choice="ok">
          Confirmer
        </button>
      </div>
    </div>
  );
}

export function ChromeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
var btn=document.getElementById("nav-toggle");
var nav=document.getElementById("site-nav");
if(btn&&nav){btn.addEventListener("click",function(){var open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",open?"true":"false");});}
var bar=document.getElementById("cookie-bar");
if(!bar)return;
try{if(localStorage.getItem("promarket-cookies"))return;}catch(e){return;}
bar.hidden=false;
bar.addEventListener("click",function(e){var choice=e.target.getAttribute("data-choice");if(!choice)return;try{localStorage.setItem("promarket-cookies",choice);}catch(err){}bar.hidden=true;});
})();`,
      }}
    />
  );
}
