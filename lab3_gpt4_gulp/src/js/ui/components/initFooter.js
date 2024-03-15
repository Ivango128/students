import footerData from "../../mockData/footerData.js";
import { createFooterTemplate } from "../templates/footerTemplate.js";

console.log(footerData)

const initFooter = (element) => {
    const footerNode = element.querySelector(".footer");
    footerNode.insertAdjacentHTML("beforeend", createFooterTemplate(footerData));
};

export default initFooter;