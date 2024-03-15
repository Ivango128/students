export const createFooterHeaderTemplate = ({ header }) => {
  const template = `
    <div class="footer__header">
        <h1 class="top__header">${header}</h1>
    </div>
    `;
  return template;
};

export const createFooterButton = ({ href, text }) => {
  const template = `
    <div class="footer__middle">
        <a href="${href}">
            <button class="early_access_btn">${text}</button>
        </a>
    </div>
    `;
  return template;
};

export const logoFooter = ({ src, alt }) => {
  const template = `
    <img class="GPT-3_logo" src="${src}" alt="${alt}">
    `;
  return template;
};

export const logoDescripFooter = (description) => {
  console.log(description);
  const template = `
        <p>${description}</p>
    `;
  return template;
};

export const linksFooter = ({ href, text }) => {
  return `<a class="footer__link" href="${href}">${text}</a>`;
};

export const linksHeadFooter = ({ title, items }) => {
  const head = `<p class="bottom__links_header">${title}</p>`;

  const links = items.map((item) => linksFooter(item)).join("");

  const template = `
    <div class="footer__links">
    ${head}
      <div class="footer__info_links">
      ${links}
      </div>
    </div>
    `;
  return template;
};

export const createFooterTemplate = ({
  header,
  button,
  logo_blok: { logo, description },
  all_links,
  byka,
}) => {
  const FooterHeader = createFooterHeaderTemplate(header);
  const FooterButton = createFooterButton(button); // бутон сделать словарем

  const left = `
    <div class="logo">
        ${logoFooter(logo)}
        ${logoDescripFooter(description)}
    </div>
    `;
  const right = `
      <div class="footer__bottom_right">
          ${all_links.map((colums) => linksHeadFooter(colums)).join("")}
      </div>
      `;
  const down = `
    <div class="footer__bottom">
        ${left}
        ${right}
    </div>
    <div class="footer__copyright">
      <p class="copyright__info"> ${byka}</p>
    </div>
    `;
  const template = `
    ${FooterHeader}
    ${FooterButton}
    ${down}
    `;
  return template;
};
