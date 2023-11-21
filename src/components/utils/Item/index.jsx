import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../allSlices/CartSlice";

const Item = ({ id, title, text, img, btn, rating, price }) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, price };

    dispatch(setAddItemToCart(item));
  };

  const onChangeToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };



  return (
    <>
      <div className="item_section">
        <div className="item_section_center">
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="item_section_center_texts">
            <div className="item_section_center_texts_price">
              <h2>${price}</h2>
            </div>
            <div className="item_section_center_texts_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <h2>{rating}</h2>
            </div>
          </div>
          <div className="item_section_btns">
            <button
              className="btn1"
              type="button"
              onClick={() => onAddToCart()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-bag-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
              </svg>
            </button>
            <button className="btn2" type="button"    onClick={() => {onAddToCart(); onChangeToggle();}}>
              {btn}
            </button>
          </div>
        </div>
        <div className="item_section_image">
          <img src={img} alt="img/item" />
        </div>
      </div>
    </>
  );
};

export default Item;
