import Lofo from "../assets/img/GPT-3.svg"


export const buttonFooterData = {
  href: "#",
  text: "Запросить ранний доступ",
};

export const logo_img = {
  src: Lofo,
  alt: "GPT-3 logo",
};

export const logo_blok = {
  logo: logo_img,
  description: `ул. Профессора Поздеева, 13, к.Г,
    Пермь, Пермский край, 614013
    Все права защищены`,
};

export const all_links = [
  {
    title: "Ссылки",
    items: [
      {
        href: "#",
        text: "Овероны",
      },
      {
        href: "#",
        text: "Соц. сети",
      },
      {
        href: "#",
        text: "Счетчики",
      },
      {
        href: "#",
        text: "Контакты",
      },
    ],
  },
  {
    title: "Компания",
    items: [
      {
        href: "#",
        text: "Условия использования",
      },
      {
        href: "#",
        text: "Перс. данные",
      },
      {
        href: "#",
        text: "Конаткты",
      },
    ],
  },
  {
    title: "Контакты",
    items: [
      {
        href: "#",
        text: "ул. Профессора Поздеева, 13, к.Г, Пермь",
      },
      {
        href: "#",
        text: "+7 (342) 2-198-520",
      },
      {
        href: "#",
        text: "info@pstu.ru",
      },
    ],
  },
];


const footerData = {
  header: "Хотите Шагнуть в Будущее Раньше Других?",
  button: buttonFooterData,
  logo_blok: logo_blok,
  all_links: all_links,
  byka: "© 2023 GPT-3. Все права защищены.",
};

export default footerData;
