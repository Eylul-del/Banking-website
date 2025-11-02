import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";
import OpenAccount from "./OpenAccount.jsx";
import mainSubImg from "../assets/images/icon/icon.png";
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

export default function Home() {
  const [activeSection, setActiveSection] = useState("individual");
  const [activeFeature, setActiveFeature] = useState("onlineBanking");
  return (
    <div className="pageContainer">
      <main>
        <div className="colOne">
          <div className="mainSub1">
            <img src={mainSubImg} alt="check img" />
            <p>No LLC Required, No Credit Check.</p>
          </div>
          <div className="mainTitle">
            <h1>
              Welcome to YourBank Empowering Your <span>Financial Journey</span>
            </h1>
          </div>
          <div className="mainSub2">
            <p>
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers' needs.
            </p>
          </div>
          <div className="openAccount">
            <Link to="/signup">Open Account</Link>
          </div>
        </div>

        <div className="colTwo">
          <div className="monthIncomeCard">
            <img src={monthIncomeCard} alt="monthly Income Card img" />
            <div className="text">
              <p>$ 5,000.00</p>
              <span>Monthly Income</span>
            </div>
          </div>

          <div className="mainTransactionsCard">
            <div className="cardImg">
              <p>Your Transactions</p>
              <img src={mainTransactionCard} alt="Main Transaction Card" />
            </div>
            <div className="cardContent">
              <h2>Money Exchange</h2>
              <div className="countries">
                <div className="countryCard">
                  <div className="countryIcon">
                    <div>
                      <img src={indiaIcon} alt="India Icon" />
                      <p>INR</p>
                    </div>
                    <p>India Rupees</p>
                  </div>
                  <div className="transaction">
                    <p>50,000</p>
                  </div>
                </div>
                <div className="countryCard">
                  <div className="countryIcon">
                    <div>
                      <img src={USDIcon} alt="USD Icon" />
                      <p>USD</p>
                    </div>
                    <p>United States Dollar</p>
                  </div>
                  <div className="transaction">
                    <p>12.00</p>
                  </div>
                </div>
              </div>
              <div className="exchangeBtn">
                <button>Exchange</button>
              </div>
            </div>
          </div>
          <div className="supportedCurrency">
            <p>Supported Currency</p>
            <div className="currencies">
              <img src={currency} alt="currency img" />
            </div>
          </div>
        </div>

        <div className="rightImg">
          <img src={AbstractDesign} alt="AbstractDesign" />
        </div>
      </main>

      <div className="ourProducts">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              Our <span>Products</span>
            </h2>
            <p>
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations.
            </p>
          </div>

          <div className="btns">
            <button
              type="button"
              className={activeSection === "individual" ? "active" : ""}
              onClick={() => setActiveSection("individual")}
            >
              For Individuals
            </button>

            <button
              type="button"
              className={activeSection === "business" ? "active" : ""}
              onClick={() => setActiveSection("business")}
            >
              For Businesses
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
              <span>Use Cases</span>
            </h2>
            <p>
              At YourBank, we cater to the diverse needs of individuals and
              businesses alike, offering a wide range of financial solutions
            </p>
          </div>
        </div>

        <div className="useCasesContent">
          <div className="col">
            <div className="features">
              <div className="feature">
                <img src={IconContainer3} alt="Icon Container" />
                <p>Nanaging Personal Ficnances</p>
              </div>

              <div className="feature">
                <img src={IconContainer4} alt="Icon Container" />
                <p>Saving for the Future</p>
              </div>

              <div className="feature">
                <img src={IconContainer5} alt="Icon Container" />
                <p>Homeownership</p>
              </div>

              <div className="feature">
                <img src={IconContainer6} alt="Icon Container" />
                <p>Education Funding</p>
              </div>
            </div>

            <div className="colDescription">
              <div className="text">
                <h3>For Buisness</h3>
                <p>
                  {" "}
                  For businesses, we empower growth with working capital
                  solutions that optimize cash flow, and our tailored financing
                  options fuel business expansion. Whatever your financial
                  aspirations, YourBank is committed to providing the right
                  tools and support to achieve them
                </p>
              </div>
              <div className="achievement">
                <div>
                  <span>65%</span>
                  <p>Chac Flow Management</p>
                </div>
                <div>
                  <span>70%</span>
                  <p>Drve Buisness Expansion</p>
                </div>
                <div>
                  <span>45%</span>
                  <p>Streamline Payroll Processing</p>
                </div>
              </div>
              <div className="learnMore">
                <button>Learn More</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="colDescription">
              <div className="text">
                <h3>For Individuals</h3>
                <p>
                  For individuals, our mortgage services pave the way to
                  homeownership, and our flexible personal loans provide vital
                  support during various life milestones. We also prioritize
                  retirement planning, ensuring a financially secure future for
                  our customers
                </p>
              </div>
              <div className="achievement">
                <div>
                  <span>78%</span>
                  <p>Secure Retirement Planning</p>
                </div>
                <div>
                  <span>63%</span>
                  <p>Manageable Debt Consolidation</p>
                </div>
                <div>
                  <span>91%</span>
                  <p>Reducing financial burdens</p>
                </div>
              </div>
              <div className="learnMore">
                <button>Learn More</button>
              </div>
            </div>

            <div className="features">
              <div className="feature">
                <img src={IconContainer7} alt="Icon Container" />
                <p>Startups and Entrepreneurs</p>
              </div>

              <div className="feature">
                <img src={IconContainer8} alt="Icon Container" />
                <p>Cash Flow Management</p>
              </div>

              <div className="feature">
                <img src={IconContainer9} alt="Icon Container" />
                <p>Business Expansion</p>
              </div>

              <div className="feature">
                <img src={IconContainer10} alt="Icon Container" />
                <p>Payment Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourFeatures">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              Our <span>Features</span>
            </h2>
            <p>
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </p>
          </div>
        </div>

        <div className="sectionContent">
          <div className="featuresOptions">
            <button
              className={activeFeature === "onlineBanking" ? "active" : ""}
              onClick={() => setActiveFeature("onlineBanking")}
            >
              Online Banking
            </button>
            <button
              className={activeFeature === "financial" ? "active" : ""}
              onClick={() => setActiveFeature("financial")}
            >
              Financial Tools
            </button>
            <button
              className={activeFeature === "support" ? "active" : ""}
              onClick={() => setActiveFeature("support")}
            >
              Customer Support
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
