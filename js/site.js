(function () {
  const page = document.body.dataset.page || "";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="site-header-inner">
      <a class="brand" href="./">
        <span>Sol Swimming</span>
        Tap Agent
      </a>
      <nav>
        <a href="./" data-nav="home">Docs</a>
        <a href="./privacy.html" data-nav="privacy">Privacy</a>
      </nav>
    </div>
  `;
  document.body.prepend(header);

  header.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute("aria-current", "page");
  });

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.textContent = "Tap Agent documentation · Sol Swimming";
  document.body.append(footer);
})();
