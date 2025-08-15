"use client";
export default function ProductQuantitySelect({
  quantity,
  setQuantity,
  styleClass = "",
  selectedSize,
  product
}) {
  const checkDisponibility = () => {
    if(product.productSizes){
      if(selectedSize.isDecanted){
        if( product.decantVolume >= (selectedSize.size.name * (quantity+1))){
          setQuantity(quantity + 1)
        }
      }else{
        if(selectedSize.quantity > quantity){
          setQuantity(quantity + 1)
        }
      }
    }else{
      if(product.quantity > quantity){
        setQuantity(quantity + 1)
      }
    }
    
  }
  return (
    <>
      <div className={`wg-quantity ${styleClass} `}>
        <span
          className="btn-quantity btn-decrease"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          role="button"
          tabIndex={0}
        >
          -
        </span>
        <input
          className="quantity-product"
          type="number"
          name="number"
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value) && value > 0) {
              setQuantity(value);
            }
          }}
        />
        <span
          className="btn-quantity btn-increase"
          onClick={() => checkDisponibility()}
          role="button"
          tabIndex={0}
        >
          +
        </span>
      </div>
    </>
  );
}
