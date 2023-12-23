class FPBanner {
  constructor() {
    this.options = {
      id: undefined,
      theme: "auto",
      fixed: true,
    };

    document.head.innerHTML +=
      '<link rel="stylesheet" href="https://levepalestina.net/lib/banner.min.css" type="text/css"/>';
  }
  create(options) {
    this.options = { ...this.options, ...options };

    const { id, theme, fixed } = this.options;

    let mount;

    if (id) {
      mount = document.getElementById(id);
    } else {
      mount = document.createElement("div");
      mount.setAttribute(
        "id",
        "fp__banner_" + Math.random().toString(36).substr(2, 9)
      );
      document.body.prepend(mount);
    }

    mount.innerHTML = `
      <div class="fp__banner ${theme} ${fixed && "fixed"}">
        <p class="fp__banner__description">🇵🇸 #FreePalestine: End the occupation now! 🇵🇸</p>
        <a class="fp__banner__link" href="https://ceasefiretoday.com/" target="_blank">Act Now</a>
      </div>
    `;
  }
}

window.FPBanner = new FPBanner();
