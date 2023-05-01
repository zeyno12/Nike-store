import React from "react";
import {useDispatch} from "react-redux"
import { setDecreaseItem, setIncreaseItem, setRemoveItemFromCart } from "../../../allSlices/CartSlice";
const CartItem = ({ el: { id, title, text, img, price, cartQuantity } }) => {

  const dispatch=useDispatch();
const onRemoveItem=()=>{
dispatch(setRemoveItemFromCart({ id, title, text, img, price, cartQuantity }))
}

const onIncreaseItem=()=>{
dispatch(setIncreaseItem({ id, title, text, img, price, cartQuantity }))
};
const onDecreaseItem=()=>{
  dispatch(setDecreaseItem({ id, title, text, img, price, cartQuantity }))
};

  return (
    <>
      <div className="cartItem_section">
        <div className="cartItem_section_img_texts">
          <div className="img_section">
            <img src={img} alt={`img/cart-item/${id}`} />
            <div className="img_second_section">${price}</div>
          </div>
          <div className="cartItem_section_texts">
            <div className="cartItem_section_texts_heading">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className="cartItem_section_btns">
              <button 
              onClick={onDecreaseItem}
              type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-dash-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                </svg>
              </button>
              <div className="count_btns">{cartQuantity}</div>
              <button 
                    onClick={onIncreaseItem}
              type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="price_section"> 
          <div className="price_item">
            <h4>${price * cartQuantity}</h4>
          </div>
          <div className="price_btn">
            <button 
            onClick={onRemoveItem}
            type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
