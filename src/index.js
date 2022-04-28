import "./assets/css/main.css";
import "./assets/scss/main.scss";
import "./assets/scss/styles.scss";

if (process.env.NODE_ENV !== `production`) {
  async function load() {
    let resize_info = await import("./smart-gread-layer/smart-gread-layer");
    resize_info.default();
  }

  load();
}
