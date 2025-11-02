import mainImage from "../assets/images/img/About/mainImage.png";
import "../components/style/About.css";
import Image1 from "../assets/images/img/About/Image (1).png";
import Image2 from "../assets/images/img/About/Image (2).png";
import Image3 from "../assets/images/img/About/Image (3).png";
import Image4 from "../assets/images/img/About/Image (4).png";
import Image5 from "../assets/images/img/About/Image (5).png";
import Image6 from "../assets/images/img/About/Image (6).png";

export default function About() {
  return (
    <div className="pageContainer">
      <main className="aboutMain">
        <div className="mainTextcontent">
          <h1>
            Where Banking Meets <span>Excellence!</span>
          </h1>
          <p>
            At YourBank, we believe that banking should be more than just
            transactions. It should be an experience that empowers individuals
            and businesses to thrive and reach their financial goals. As a
            trusted financial institution, we are committed to delivering
            exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering
            integrity, we strive to provide the best banking experience for our
            valued customers. Join us on this exciting journey and discover a
            new level of banking excellence.
          </p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt="Main Image" />
        </div>
      </main>

      <div className="missionAndVision">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>Mission & Vision</span>
            </h2>
            <p>
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              a strong commitment to customer satisfaction and community
              development
            </p>
          </div>
        </div>

        <div className="sectionContent">
          <div className="row">
            <div className="rowImg">
              <img src={Image1} alt="img" />
            </div>
            <div className="rowTextContent">
              <h2>Mission</h2>
              <p>
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="rowTextContent">
              <h2>Vision</h2>
              <p>
                Our vision at YourBank is to redefine banking by creating a
                seamless and personalized experience for our customers. We
                envision a future where banking is accessible, transparent, and
                tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront
                of the industry, setting new standards for customer-centric
                banking. Our vision is to be the preferred financial
                institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </div>
            <div className="rowImg">
              <img src={Image2} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="pressReleases">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              Press <span>Releases</span>
            </h2>
            <p>
              Stay updated with the latest happenings and exciting developments
              at YourBank through our press releases.
            </p>
          </div>
        </div>

        <div className="sectionCards">
          <div className="card">
            <div className="cardImg">
              <img src={Image3} alt="img" />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>
                  YourBank Launches New Rewards Program to Enhance Customer
                  Loyalty and Satisfaction
                </h3>
              </div>
              <div className="tags">
                <span className="tag">Location: India</span>
                <span className="tag">Date: 06/11/2024</span>
              </div>
              <div className="description">
                <p>
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image4} alt="img" />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>
                  YourBank Expands Branch Network with Opening of New Location
                  in Chennai
                </h3>
              </div>
              <div className="tags">
                <span className="tag">Location: India</span>
                <span className="tag">Date: 12/11/2024</span>
              </div>
              <div className="description">
                <p>
                  YourBank is excited to announce the grand opening of our
                  newest branch in [City]. This expansion is a testament to our
                  continued commitment to serving our customers and providing
                  them with convenient access to our comprehensive range of
                  banking services. The new branch will feature state-of-the-art
                  facilities, a team of dedicated professionals, and a
                  personalized approach to banking, further.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image5} alt="img" />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>
                  YourBank Partners with Local Nonprofit to Support Financial
                  Education Initiatives
                </h3>
              </div>
              <div className="tags">
                <span className="tag">Location: India</span>
                <span className="tag">Date: 24/12/2024</span>
              </div>
              <div className="description">
                <p>
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative, demonstrating our commitment to environmental
                  responsibility. This initiative includes a range of
                  sustainable banking products and services, such as green
                  loans, eco-friendly investment options, and paperless banking
                  solutions. By incorporating sustainable practices into our
                  operations, we aim to contribute to a greener future while
                  providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={Image6} alt="img" />
            </div>
            <div className="cardContent">
              <div className="title">
                <h3>
                  YourBank Launches Sustainable Banking Initiative to Promote
                  Environmental Responsibility
                </h3>
              </div>
              <div className="tags">
                <span className="tag">Location: India</span>
                <span className="tag">Date: 28/12/2024</span>
              </div>
              <div className="description">
                <p>
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative, demonstrating our commitment to environmental
                  responsibility. This initiative includes a range of
                  sustainable banking products and services, such as green
                  loans, eco-friendly investment options, and paperless banking
                  solutions. By incorporating sustainable practices into our
                  operations, we aim to contribute to a greener future while
                  providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
