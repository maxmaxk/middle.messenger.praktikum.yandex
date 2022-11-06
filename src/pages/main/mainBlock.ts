import { Block } from "../../common/block";
import { mainTemplate } from "./main.tmpl";
import { MenuLinks } from "../../components/menu-links/menuLinks";
import { pages } from "../pages";

export class MainBlock extends Block {
  constructor() {
    super("main", {
      attr: { class: "flexcontainer" },
      mainTitle: "Макеты страниц",
      menuLinks: new MenuLinks("ul", {
        attr: { class: "main__items" },
        items: Object.values(pages).filter((item) => item.title),
      }),
    });
  }

  render() {
    return this.compile(mainTemplate, {
      replaces: [
        { mainTitle: this._props.mainTitle },
        { title: this._props.title },
        { url: this._props.url },
      ],
    });
  }
}
