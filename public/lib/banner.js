class PBanner {
  constructor() {
    this.element = "#banner";
    this.options = {
      theme: "system",
      fixed: true,
    };

    document.head.innerHTML +=
      '<link rel="stylesheet" href="https://watermelon-cm1.pages.dev/lib/banner.min.css" type="text/css"/>';
  }
  create(element, options) {
    this.element = element;
    this.options = { ...this.options, ...options };

    const banner = document.querySelector(this.element);
    const { theme, fixed } = this.options;

    if (!banner) {
      throw new Error("You must provide an element to create the banner in");
    } else {
      banner.innerHTML = `
        <div class="fp__banner ${theme} ${fixed && "fixed"}">
          <p class="fp__banner__description">Isreals genocide against 🇵🇸 Palestine needs to stop. Our hears are with those who suffer</p>
          <a href="#" class="fp__banner__link" href="https://ceasefiretoday.com/" target="_blank">🍉 Palestine</a>
        </div>
      `;
    }
  }
}

window.PBanner = new PBanner();
