import SecMyAppsData from "../../mockData/myAppsData.js";
import { myAppsTemplate } from "../templates/myappsTemplate.js";

const initMyApps = (element) => {
  const myAppsNode = element.querySelector(".my_apps");
  
  myAppsNode.insertAdjacentHTML("beforeend", myAppsTemplate(SecMyAppsData));
};

export default initMyApps;
