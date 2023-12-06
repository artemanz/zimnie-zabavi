import Swiper from "swiper";
import "./assets/fonts";
import "swiper/css";
import "./style.css";
import { Navigation } from "swiper/modules";

// TABS
const $tabs = [
  ...document.querySelectorAll<HTMLLIElement>("[data-selector^=tab-button]"),
];

const $tabDecors = [
  ...document.querySelectorAll<HTMLLIElement>("[data-selector^=tab-decor]"),
];

const $tabContents = [
  ...document.querySelectorAll<HTMLLIElement>("[data-selector^=tab-content]"),
];

const tabsMap = new Map<
  HTMLElement,
  { decor: HTMLElement; tabContent: HTMLElement }
>();

for (let i in $tabs) {
  let idx = +i;
  tabsMap.set($tabs[i], {
    decor: $tabDecors[i],
    tabContent: $tabContents[i],
  });

  const $tab = $tabs[i];

  $tab.addEventListener("click", () => {
    $tabs.forEach(($tab) => delete $tab.dataset.state);
    $tabContents.forEach(($tab) => delete $tab.dataset.state);
    $tab.dataset.state = "active";
    tabsMap.get($tab)!.tabContent.dataset.state = "active";

    for (let j = 0; j < $tabDecors.length; j++) {
      if (j > idx) delete $tabDecors[j].dataset.state;
      else $tabDecors[j].dataset.state = "active";
    }
  });
}

// Partners slider
new Swiper("[data-selector=partners-slider]", {
  modules: [Navigation],
  navigation: {
    nextEl: "[data-selector=partners-slider-next]",
    prevEl: "[data-selector=partners-slider-prev]",
  },
});
