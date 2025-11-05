import mainImage from "../assets/images/img/About/mainImage.png";
import "../components/style/About.css";
import Image1 from "../assets/images/img/About/Image (1).png";
import Image2 from "../assets/images/img/About/Image (2).png";
import Image3 from "../assets/images/img/About/Image (3).png";
import Image4 from "../assets/images/img/About/Image (4).png";
import Image5 from "../assets/images/img/About/Image (5).png";
import Image6 from "../assets/images/img/About/Image (6).png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pageContainer">
      <main className="aboutMain">
        <div className="mainTextcontent">
          <h1>
            {t("about_heading1")} <span>{t("about_heading_span")}</span>
          </h1>
          <p>{t("about_paragraph1")}</p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt={t("about_main_image_alt")} />
        </div>
      </main>

      <div className="missionAndVision">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>{t("mission_vision_title")}</span>
            </h2>
            <p>{t("mission_vision_paragraph")}</p>
          </div>
        </div>

        <div className="sectionContent">
          <div className="row">
            <div className="rowImg">
              <img src={Image1} alt={t("mission_image_alt")} />
            </div>
            <div className="rowTextContent">
              <h2>{t("mission_title")}</h2>
              <p>{t("mission_paragraph")}</p>
            </div>
          </div>

          <div className="row">
            <div className="rowTextContent">
              <h2>{t("vision_title")}</h2>
              <p>{t("vision_paragraph")}</p>
            </div>
            <div className="rowImg">
              <img src={Image2} alt={t("vision_image_alt")} />
            </div>
          </div>
        </div>
      </div>

      <div className="pressReleases">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              {t("press_title1")} <span>{t("press_title2")}</span>
            </h2>
            <p>{t("press_paragraph")}</p>
          </div>
        </div>

        <div className="sectionCards">
          <div className="card">
            <div className="cardImg">
              <img src={Image3} alt={t("press_card1_image_alt")} />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>{t("press_card1_title")}</h3>
              </div>
              <div className="tags">
                <span className="tag">{t("press_card_location")}: India</span>
                <span className="tag">{t("press_card_date")}: 06/11/2024</span>
              </div>
              <div className="description">
                <p>{t("press_card1_paragraph")}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image4} alt={t("press_card2_image_alt")} />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>{t("press_card2_title")}</h3>
              </div>
              <div className="tags">
                <span className="tag">{t("press_card_location")}: India</span>
                <span className="tag">{t("press_card_date")}: 12/11/2024</span>
              </div>
              <div className="description">
                <p>{t("press_card2_paragraph")}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image5} alt={t("press_card3_image_alt")} />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>{t("press_card3_title")}</h3>
              </div>
              <div className="tags">
                <span className="tag">{t("press_card_location")}: India</span>
                <span className="tag">{t("press_card_date")}: 24/12/2024</span>
              </div>
              <div className="description">
                <p>{t("press_card3_paragraph")}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image6} alt={t("press_card4_image_alt")} />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>{t("press_card4_title")}</h3>
              </div>
              <div className="tags">
                <span className="tag">{t("press_card_location")}: India</span>
                <span className="tag">{t("press_card_date")}: 28/12/2024</span>
              </div>
              <div className="description">
                <p>{t("press_card4_paragraph")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
