export const createUpSecMyAppsTemplate = ({
  title,
  img: {
    src,
    alt,
  },
  header,
  description,
  link: {
    href,
    text,
  },
}) => {
  const template = `
    <div class="up_section">
        <div class="left_cont">
          <img src="${src}" alt="${alt}">
        </div>
        <div class="right__container">
          <p class="request_not_button">${title}</p>
          <h2 class="right__header">${header}</h2>
          <p class="container__content">
          ${description}
          </p>
          <a href="${href}" class="right__apps">${text}</a>
        </div>
    </div>
    `;
  return template;
};

export const createDownSecMyAppsTemplate = ({title, header, button: { href, text },}) => {
  const template = `
    <div class="down_section">
        <div class="left">
          <p class="req_not_btn">${title}</p>
          <h3 class="black_header">
          ${header}
          </h3>
        </div>
        <div class="right">
          <a href="${href}"><button class="black_btn">${text}</button></a>
        </div>
    </div>
    `;
  return template;
};

export const myAppsTemplate = ({UpSecMyAppsData, DownSecMyAppsData}) => {
  const UpSecMyAppsTemplate = createUpSecMyAppsTemplate(UpSecMyAppsData);
  const DownSecMyAppsTemplate = createDownSecMyAppsTemplate(DownSecMyAppsData);
  const resultTemplate = UpSecMyAppsTemplate + DownSecMyAppsTemplate;
  return resultTemplate;
};
