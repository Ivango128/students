import oneArtImg from "../assets/img/1_art.png";
import twoArtImg from "../assets/img/2_art.png";
import thereArtImg from "../assets/img/3_art.png";
import fourArtImg from "../assets/img/5_art.png";

export const blogHeaderData = {
  header: "Многое Происходит, <br> Мы Ведем об Этом Блог.",
};

export const blogDescData = [
  {
    isMaimArt: true,
    img: {
      src: oneArtImg,
      alt: "nft",
    },

    description: {
      date: "Сент 26, 2021",
      header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
      link: {
        href: "#",
        label: "Читать полную статью",
      },
    },
  },
  {
    isMaimArt: false,
    img: {
      src: twoArtImg,
      alt: "nft1",
    },

    description: {
      date: "Сент 26, 2021",
      header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
      link: {
        href: "#",
        label: "Читать полную статью",
      },
    },
  },
  {
    isMaimArt: false,
    img: {
      src: twoArtImg,
      alt: "nft2",
    },

    description: {
      date: "Сент 26, 2021",
      header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
      link: {
        href: "#",
        label: "Читать полную статью",
      },
    },
  },
  {
    isMaimArt: false,
    img: {
      src: thereArtImg,
      alt: "nft3",
    },

    description: {
      date: "Сент 26, 2021",
      header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
      link: {
        href: "#",
        label: "Читать полную статью",
      },
    },
  },
  {
    isMaimArt: false,
    img: {
      src: fourArtImg,
      alt: "nft4",
    },

    description: {
      date: "Сент 26, 2021",
      header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
      link: {
        href: "#",
        label: "Читать полную статью",
      },
    },
  },
];

const blogData = {
  blogHeaderData,
  blogDescData,
};

export default blogData;
