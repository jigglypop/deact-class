import App from "./src/App.js";
import initStore from "./src/store/index.js";
import { init } from "./src/util/react.js";
import ContentTitle from "./src/components/ContentTitle.js";
import CardsContainer from "./src/components/CardsContainer.js";
import FormContainer from "./src/components/FormContainer.js";
import Card from "./src/components/Card.js";

export const Modules = {
  App,
  ContentTitle,
  CardsContainer,
  FormContainer,
  Card,
};

export const store = initStore();
init();
