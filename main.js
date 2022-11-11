import App from "./src/App.js";
import initStore from "./src/store/index.js";
import { init } from "./src/util/react.js";
import HomePage from "./src/page/HomePage.js";
import ContentTitle from "./src/components/ContentTitle.js";
import CardsContainer from "./src/components/CardsContainer.js";
import Header from "./src/components/Header.js";

export const Modules = {
  App,
  HomePage,
  ContentTitle,
  CardsContainer,
  Header,
};

export const store = initStore();
init();
