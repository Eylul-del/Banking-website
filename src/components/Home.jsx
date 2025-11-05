import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";
import OpenAccount from "./OpenAccount.jsx";
import mainSubImg from "../assets/images/icon/Icon.png";
import monthIncomeCard from "../assets/images/icon/Icon Container.png";
import mainTransactionCard from "../assets/images/img/Container (1).png";
import indiaIcon from "../assets/images/icon/indiaIcon.png";
import USDIcon from "../assets/images/icon/USDIcon.png";
import AbstractDesign from "../assets/images/img/Abstract Design (1).png";
import currency from "../assets/images/img/currency.png";
import IconContainer3 from "../assets/images/icon/Icon Container (3).png";
import IconContainer4 from "../assets/images/icon/Icon Container (4).png";
import IconContainer5 from "../assets/images/icon/Icon Container (5).png";
import IconContainer6 from "../assets/images/icon/Icon Container (6).png";
import IconContainer7 from "../assets/images/icon/Icon Container (7).png";
import IconContainer8 from "../assets/images/icon/Icon Container (8).png";
import IconContainer9 from "../assets/images/icon/Icon Container (9).png";
import IconContainer10 from "../assets/images/icon/Icon Container (10).png";
import IndividualProducts from "./IndividualProducts";
import BusinessProducts from "./BusinessProducts";
import OnlineBanking from "./features/OnlineBanking";
import Financialtools from "./features/FinancialTools";
import CustomerSupport from "./features/CustomerSupport";
import OurTestimonials from "./OurTestimonials.jsx";
import FAQ from "./FAQ.jsx";
import "../i18n.js";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [activeSection, setActiveSection] = useState("individual");
  const [activeFeature, setActiveFeature] = useState("onlineBanking");
  const { t } = useTranslation();

  return (
    <div className="pageContainer">
      <main>
        <div className="colOne">
          <div className="mainSub1">
            <img src={mainSubImg} alt={t("home_main_sub_img_alt")} />
            <p>{t("home_main_sub1_text")}</p>
          </div>
          <div className="mainTitle">
            <h1>
              {t("home_main_title")} <span>{t("home_main_title_span")}</span>
            </h1>
          </div>
          <div className="mainSub2">
            <p>{t("home_main_sub2_paragraph")}</p>
          </div>
          <div className="openAccount">
            <Link to="/signup">{t("home_open_account")}</Link>
          </div>
        </div>

        <div className="colTwo">
          <div className="monthIncomeCard">
            <img src={monthIncomeCard} alt={t("home_month_income_img_alt")} />
            <div className="text">
              <p>$ 5,000.00</p>
              <span>{t("home_monthly_income")}</span>
            </div>
          </div>

          <div className="mainTransactionsCard">
            <div className="cardImg">
              <p>{t("home_your_transactions")}</p>
              <img
                src={mainTransactionCard}
                alt={t("home_transaction_card_img_alt")}
              />
            </div>
            <div className="cardContent">
              <h2>{t("home_money_exchange_title")}</h2>
              <div className="countries">
                <div className="countryCard">
                  <div className="countryIcon">
                    <div>
                      <img src={indiaIcon} alt={t("home_india_icon_alt")} />
                      <p>{t("home-india-country-currency")}</p>
                    </div>
                    <p>{t("home_india_rupees")}</p>
                  </div>
                  <div className="transaction">
                    <p>50,000</p>
                  </div>
                </div>
                <div className="countryCard">
                  <div className="countryIcon">
                    <div>
                      <img src={USDIcon} alt={t("home_usd_icon_alt")} />
                      <p>{t("home-usd-country-currency")}</p>
                    </div>
                    <p>{t("home_usd_dollar")}</p>
                  </div>
                  <div className="transaction">
                    <p>12.00</p>
                  </div>
                </div>
              </div>
              <div className="exchangeBtn">
                <button>{t("home_exchange_button")}</button>
              </div>
            </div>
          </div>
          <div className="supportedCurrency">
            <p>{t("home_supported_currency")}</p>
            <div className="currencies">
              <img src={currency} alt={t("home_currency_img_alt")} />
            </div>
          </div>
        </div>

        <div className="rightImg">
          <img src={AbstractDesign} alt={t("home_abstract_design_alt")} />
        </div>
      </main>

      <div className="ourProducts">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              {t("home_products_title")} <span>{t("home_products_span")}</span>
            </h2>
            <p>{t("home_products_paragraph")}</p>
          </div>

          <div className="btns">
            <button
              type="button"
              className={activeSection === "individual" ? "active" : ""}
              onClick={() => setActiveSection("individual")}
            >
              {t("home_products_btn_individual")}
            </button>

            <button
              type="button"
              className={activeSection === "business" ? "active" : ""}
              onClick={() => setActiveSection("business")}
            >
              {t("home_products_btn_business")}
            </button>
          </div>
        </div>

        <div className="productsCards">
          {activeSection === "individual" ? (
            <IndividualProducts />
          ) : (
            <BusinessProducts />
          )}
        </div>
      </div>

      <div className="useCases">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>{t("home_use_cases_title")}</span>
            </h2>
            <p>{t("home_use_cases_paragraph")}</p>
          </div>
        </div>

        <div className="useCasesContent">
          <div className="col">
            <div className="features">
              <div className="feature">
                <img src={IconContainer3} alt={t("home_feature1_img_alt")} />
                <p>{t("home_feature1_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer4} alt={t("home_feature2_img_alt")} />
                <p>{t("home_feature2_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer5} alt={t("home_feature3_img_alt")} />
                <p>{t("home_feature3_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer6} alt={t("home_feature4_img_alt")} />
                <p>{t("home_feature4_text")}</p>
              </div>
            </div>

            <div className="colDescription">
              <div className="text">
                <h3>{t("home_for_business_title")}</h3>
                <p>{t("home_for_business_paragraph")}</p>
              </div>
              <div className="achievement">
                <div>
                  <span>65%</span>
                  <p>{t("home_business_achievement1")}</p>
                </div>
                <div>
                  <span>70%</span>
                  <p>{t("home_business_achievement2")}</p>
                </div>
                <div>
                  <span>45%</span>
                  <p>{t("home_business_achievement3")}</p>
                </div>
              </div>
              <div className="learnMore">
                <button>{t("home_learn_more")}</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="colDescription">
              <div className="text">
                <h3>{t("home_for_individuals_title")}</h3>
                <p>{t("home_for_individuals_paragraph")}</p>
              </div>
              <div className="achievement">
                <div>
                  <span>78%</span>
                  <p>{t("home_individual_achievement1")}</p>
                </div>
                <div>
                  <span>63%</span>
                  <p>{t("home_individual_achievement2")}</p>
                </div>
                <div>
                  <span>91%</span>
                  <p>{t("home_individual_achievement3")}</p>
                </div>
              </div>
              <div className="learnMore">
                <button>{t("home_learn_more")}</button>
              </div>
            </div>

            <div className="features">
              <div className="feature">
                <img src={IconContainer7} alt={t("home_feature5_img_alt")} />
                <p>{t("home_feature5_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer8} alt={t("home_feature6_img_alt")} />
                <p>{t("home_feature6_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer9} alt={t("home_feature7_img_alt")} />
                <p>{t("home_feature7_text")}</p>
              </div>
              <div className="feature">
                <img src={IconContainer10} alt={t("home_feature8_img_alt")} />
                <p>{t("home_feature8_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourFeatures">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              {t("home_features_title")} <span>{t("home_features_span")}</span>
            </h2>
            <p>{t("home_features_paragraph")}</p>
          </div>
        </div>

        <div className="sectionContent">
          <div className="featuresOptions">
            <button
              className={activeFeature === "onlineBanking" ? "active" : ""}
              onClick={() => setActiveFeature("onlineBanking")}
            >
              {t("home_feature_btn_online")}
            </button>
            <button
              className={activeFeature === "financial" ? "active" : ""}
              onClick={() => setActiveFeature("financial")}
            >
              {t("home_feature_btn_financial")}
            </button>
            <button
              className={activeFeature === "support" ? "active" : ""}
              onClick={() => setActiveFeature("support")}
            >
              {t("home_feature_btn_support")}
            </button>
          </div>

          <div className="featuresContainer">
            {activeFeature === "onlineBanking" ? (
              <OnlineBanking />
            ) : activeFeature === "financial" ? (
              <Financialtools />
            ) : activeFeature === "support" ? (
              <CustomerSupport />
            ) : null}
          </div>
        </div>
      </div>

      <FAQ />
      <OurTestimonials />
      <OpenAccount />
    </div>
  );
}
