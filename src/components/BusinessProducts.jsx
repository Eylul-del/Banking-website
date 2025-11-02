import IconContainer11 from "../assets/images/icon/Icon Container (11).png";
import IconContainer1 from "../assets/images/icon/Icon Container (1).png";
import IconContainer2 from "../assets/images/icon/Icon Container (2).png";

export default function BusinessProducts() {
  return (
    <div className="productsCards">
      <div className="card">
        <div className="img">
          <img src={IconContainer11} alt="Icon Container" />
        </div>
        <div className="title">
          <h3>Business Accounts</h3>
        </div>
        <div className="text">
          <p>
            Simplify your company’s finances with our business account options.
            Enjoy seamless online banking, bulk payments, and tools for managing
            expenses and cash flow efficiently.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src={IconContainer1} alt="Icon Container" />
        </div>
        <div className="title">
          <h3>Merchant Services</h3>
        </div>
        <div className="text">
          <p>
            Accept payments easily with our secure merchant solutions. From
            modern POS systems to online payment gateways, we help your business
            get paid faster and more securely.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src={IconContainer2} alt="Icon Container" />
        </div>
        <div className="title">
          <h3>Commercial Loans</h3>
        </div>
        <div className="text">
          <p>
            Power your growth with flexible financing options. Whether expanding
            operations, upgrading equipment, or managing short-term expenses,
            our commercial loans support your goals.
          </p>
        </div>
      </div>
    </div>
  );
}
