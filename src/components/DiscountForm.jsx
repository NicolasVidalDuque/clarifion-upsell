import "./DiscountForm.css";

const DiscountForm = () => {
  return (
    <div className="frame-parent6">
      <div className="frame-parent7">
        <div className="frame-wrapper2">
          <div className="yes-claim-my-discount-parent">
            <b className="yes-claim">Yes - Claim my discount</b>
            <img className="line-icon" alt="" src="/line-1.svg" />
          </div>
        </div>
        <div className="frame-parent8">
          <div className="free-shipping-parent">
            <div className="free-shipping">Free shipping</div>
            <div className="line-div" />
            <div className="lock-7-1-parent">
              <img className="lock-7-1" alt="" src="/lock-7-1.svg" />
              <div className="secure-256-bit-ssl">
                Secure 256-bit SSL encryption
              </div>
            </div>
          </div>
          <div className="frame-child3" />
          <div className="visa-parent">
            <img className="visa-icon" alt="" src="/visa.svg" />
            <img className="visa-icon" alt="" src="/shop-pay.svg" />
            <img className="visa-icon" alt="" src="/paypal.svg" />
            <img className="visa-icon" alt="" src="/mastercard.svg" />
            <img className="visa-icon" alt="" src="/gpay.svg" />
            <img className="visa-icon" alt="" src="/apple-pay.svg" />
            <img className="visa-icon" alt="" src="/amex.svg" />
          </div>
        </div>
      </div>
      <div className="no-thanks-i">No thanks, I don’t want this.</div>
    </div>
  );
};

export default DiscountForm;
