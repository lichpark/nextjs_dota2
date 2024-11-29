import { mainNews } from "../constant/mainnews";
import { headerStyle } from "../style/HeaderStyle";
import { mainStyle } from "../style/MainStyle";
import MainNewsCard from "./MainNewsCard";

const MainNews = () => {
  /*
     backgroundImage:
          "url(https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", */
  return (
    <div
      className={`${headerStyle.flexCenterPackage}`}
      style={{
        width: "100%",
        padding: "1%",
        background:
          "linear-gradient(180deg, rgba(2,0,36,1) 90%, rgba(180,187,189,1) 100%, rgba(0,0,0,0) 100%)",
        gap: "1%",
      }}
    >
      {mainNews.map((v, i) => (
        <MainNewsCard {...v} key={i} />
      ))}
    </div>
  );
};

export default MainNews;
