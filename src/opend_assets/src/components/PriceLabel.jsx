import React from "react";

const PriceLabel = (props) => {
    console.log(props.sellingPrice)
  return (
    <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
      <span className="disChip-label">{props.sellingPrice} DEASY</span>
    </div>
  );
};

export default PriceLabel;
