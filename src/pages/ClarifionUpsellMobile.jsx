import Header from "../components/Header";
import PriceCard from "../components/PriceCard";
import DiscountForm from "../components/DiscountForm";
import Footer from "../components/Footer";
import "./ClarifionUpsellMobile.css";
import bigImage from "../image 4.png"
import Comment from "../components/Comment"

const ClarifionUpsellMobile = () => {
  return (
    <div className="clarifion-upsell-mobile">
      <Header />
      <div className="frame-parent">
        <div className="wait-your-order-in-progress-parent">
          <div className="wait-your">Wait ! your order in progress.</div>
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</div>
        </div>
        <div className="frame-group">
          <div className="group-parent">
            <img className="frame-child" alt="" src="/group-1484578147.svg" />
            <div className="cart-review"><span className="steps">Step 1: </span>Cart Review</div>
          </div>
          <div className="group-parent">
            <img className="frame-child" alt="" src="/group-14845781471.svg" />
            <div className="cart-review"><span className="steps">Step 2: </span>Checkout</div>
          </div>
          <div className="frame-div">
            <div className="frame-child">
              <div className="group-child" />
              <div className="div">3</div>
            </div>
            <b className="special-offer"><span className="steps">Step 3: </span>Special Offer</b>
          </div>
          <div className="group-parent1">
            <div className="frame-child">
              <div className="group-item" />
              <div className="div">4</div>
            </div>
            <div className="special-offer"><span className="steps">Step 4: </span>Confirmation</div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="group-parent2">
              <img
                className="frame-inner"
                alt=""
                src="/group-14845781472.svg"
              />
              <div className="cart-review">Step 1 : Cart Review</div>
            </div>
            <div className="group-parent3">
              <img
                className="frame-inner"
                alt=""
                src="/group-14845781472.svg"
              />
              <div className="cart-review">Step 2 : Checkout</div>
            </div>
            <div className="group-parent4">
              <div className="frame-inner">
                <div className="group-inner" />
                <div className="div2">3</div>
              </div>
              <b className="special-offer">Step 3 : Special Offer</b>
            </div>
            <div className="group-parent5">
              <div className="frame-inner">
                <div className="ellipse-div" />
                <div className="div3">4</div>
              </div>
              <div className="special-offer">Step 4 : Confirmation</div>
            </div>
          </div>
        </div>
        <div className="one-time-only-special-price-fo-parent">
          <div className="left">
            <div className="one-time-only-container hidden1">
              <span>ONE TIME ONLY</span>
              <span className="special-price-for">{` special price for 6 extra Clarifion for only `}</span>
              <span>$14 each</span>
              <span className="special-price-for"> ($84.00 total!)</span>
            </div>
            <div className="banner">
              <img src={bigImage} />
            </div>
            <div className="hidden2 aoeu">
              <Comment />
            </div>
          </div>
          <div className="right">
            <div className="one-time-only-container hidden2">
              <span>ONE TIME ONLY</span>
              <span className="special-price-for">{` special price for 6 extra Clarifion for only `}</span>
              <span>$14 each</span>
              <span className="special-price-for"> ($84.00 total!)</span>
            </div>
            <PriceCard />
            <div className="frame-parent1">
              <div className="tick-circle-parent">
                <img className="tick-circle-icon" alt="" src="/tickcircle.svg" />
                <div className="negative-ion-technology-container">
                  <span>Negative Ion Technology may</span>
                  <b> help with allergens</b>
                </div>
              </div>
              <div className="tick-circle-parent">
                <img className="tick-circle-icon" alt="" src="/tickcircle.svg" />
                <div className="negative-ion-technology-container">
                  <span>Designed for</span>
                  <b> air rejuvenation</b>
                </div>
              </div>
              <div className="tick-circle-parent">
                <img className="tick-circle-icon" alt="" src="/tickcircle.svg" />
                <div className="negative-ion-technology-container">
                  <b>Perfect for every room</b>
                  <span> in all types of places.</span>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="group-parent6">
                <img className="frame-inner" alt="" src="/group-1000004656.svg" />
                <div className="save-53-and-container">
                  <span>{`Save `}</span>
                  <span className="span">53%</span>
                  <span>{` and get `}</span>
                  <span className="span">6 extra Clarifision</span>
                  <span>{` for only `}</span>
                  <span className="span">$14 Each</span>
                  <span>.</span>
                </div>
              </div>
            </div>
            <DiscountForm />
            <div className="image-6-parent">
              <img className="image-6-icon" alt="" src="/image-6@2x.png" />
              <div className="if-you-are-container">
                <span>{`If you are not completely thrilled with your Clarifion - We have a `}</span>
                <b>30 day satisfaction guarantee</b>
                <span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClarifionUpsellMobile;
