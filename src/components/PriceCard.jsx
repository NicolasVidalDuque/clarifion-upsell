import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div className="frame-parent4">
      <div className="group-parent7">
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <img
            className="image-removebg-preview-12-1"
            alt=""
            src="/imageremovebgpreview-12-1@2x.png"
          />
        </div>
        <div className="frame-parent5">
          <div className="clarifion-air-ionizer-parent">
            <div className="clarifion-air-ionizer">Clarifion Air Ionizer</div>
            <div className="parent">
              <div className="div5">$180</div>
              <div className="div6">$84</div>
            </div>
          </div>
          <img className="stars-icon" alt="" src="/stars.svg" />
          <div className="group-parent8">
            <img className="frame-child2" alt="" src="/group-1000001340.svg" />
            <div className="left-in-stock">12 left in Stock</div>
          </div>
        </div>
      </div>
      <div className="simply-plug-a">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </div>
    </div>
  );
};

export default PriceCard;
