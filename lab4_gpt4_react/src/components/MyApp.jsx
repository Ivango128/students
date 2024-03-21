import SecMyAppsData from "../mockData/myAppsData";
import MyAppImg from "../assets/img/my_apps.png";

export const СreateUpSecMyAppsTemplate = ({UpSecMyAppsData}) => {
  const { title, img : {alt}, header, description, link:{href, text} } = UpSecMyAppsData;
  return (
    <div className="up_section">
      <div className="left_cont">
        <img src={MyAppImg} alt={alt} />
      </div>
      <div className="right__container">
        <p className="request_not_button">{title}</p>
        <h2 className="right__header">{header}</h2>
        <p className="container__content">{description}</p>
        <a href={href} className="right__apps">
          {text}
        </a>
      </div>
    </div>
  );
};

export const СreateDownSecMyAppsTemplate = ({DownSecMyAppsData}) => {
  const {
    title,
    header,
    button: { href, text },
  } = DownSecMyAppsData;
  return (
    <div className="down_section">
      <div className="left">
        <p className="req_not_btn">{title}</p>
        <h3 className="black_header">{header}</h3>
      </div>
      <div className="right">
        <a href={href}>
          <button className="black_btn">{text}</button>
        </a>
      </div>
    </div>
  );
};

const MyApp = () => {
  const { UpSecMyAppsData, DownSecMyAppsData } = SecMyAppsData;
  return (
    <>
      <СreateUpSecMyAppsTemplate UpSecMyAppsData={UpSecMyAppsData} />
      <СreateDownSecMyAppsTemplate DownSecMyAppsData={DownSecMyAppsData} />
    </>
  );
};

export default MyApp;
