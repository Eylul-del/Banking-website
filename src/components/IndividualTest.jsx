import IconContainer1 from "../assets/images/icon/Icon (1).png";

export default function IndividualTest() {
  return (
    <div className="testimonialsCards">
      <div className="card">
        <img src={IconContainer1} alt="IconContainer" />
        <div className="opinion">
          <p>
            YourBank has been my trusted financial partner for years. Their
            personalized service and innovative digital banking solutions have
            made managing my finances a breeze.
          </p>
        </div>
        <div className="name">
          <span>Sara T</span>
        </div>
      </div>

      <div className="card">
        <img src={IconContainer1} alt="IconContainer" />
        <div className="opinion">
          <p>
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
        </div>
        <div className="name">
          <span>John D</span>
        </div>
      </div>

      <div className="card">
        <img src={IconContainer1} alt="IconContainer" />
        <div className="opinion">
          <p>
            I love the convenience of YourBank's mobile banking app. It allows
            me to stay on top of my finances and make transactions on the go.
            The app is user-friendly and secure, giving me peace of mind.
          </p>
        </div>
        <div className="name">
          <span>Emily G</span>
        </div>
      </div>
    </div>
  );
}
