import footerData from "../mockData/footerData";

export const LogoFooter = ({ logo }) => {
  const { src, alt } = logo;
  return (<img className="GPT-3_logo" src={src} alt={alt} />);
};
export const LinksFooter = ({ item }) => {
  const { href, text } = item;
  return (
    <a className="footer__link" href={href}>{text}</a>
  );
};

export const LinksHeadFooter = ({ item }) => {
  const { title, items } = item;
  return (
    <>
    <div className="footer__links">
      <p className="bottom__links_header">{title}</p>
      <div className="footer__info_links">
        {items.map((item, index) => (<LinksFooter key={index} item={item}/>))}
      </div>
    </div>
    </>
  );
};

const Footer = () => {
  const {header, button: { href, text }, logo_blok: { logo, description }, all_links, byka} = footerData;
  return (
    <>
      <div className="footer__header">
        <h1 className="top__header">{header}</h1>
      </div>
      <div className="footer__middle">
        <a href={href}>
          <button className="early_access_btn">{text}</button>
        </a>
      </div>
      <div className="footer__bottom">
        <div className="logo">
          <LogoFooter logo={logo} />
          <p>{description}</p>
        </div>
        <div className="footer__bottom_right">
          {all_links.map((item, index) => (<LinksHeadFooter key={index} item={item}/>))}
        </div>
      </div>
      <div className="footer__copyright">
        <p className="copyright__info">{byka}</p>
      </div>
    </>
  );
};

export default Footer;
