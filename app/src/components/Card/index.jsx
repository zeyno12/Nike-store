import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCount from "../cart/CartCount";
import CartEmpty from "../cart/CartEmpty";
import CartItem from "../cart/CartItem";
import {
  setCloseCart,
  selectCartState,
  selectCartItem,
  setClearCartItem,
  setGetTotals,
  selectTotalAmmount,
  selectTotalQuantity,
} from "../../allSlices/CartSlice";

const Card = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItem = useSelector(selectCartItem);
  const totalAmmount=useSelector(selectTotalAmmount);
  const totalQuantity=useSelector(selectTotalQuantity);
  const onChangeToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItem = () => {
    dispatch(setClearCartItem());
  };

  useEffect(()=>{
  dispatch(setGetTotals())
  },[cartItem,dispatch])

  return (
    <>
      <div
        className={`card_section_general  ${
          ifCartState ? "visible_section" : "invisible_section"
        }`}
      >
        <div className="card_general_items">
          <CartCount
          totalQuantity={totalQuantity}
            onChangeToggle={onChangeToggle}
            onClearCartItem={onClearCartItem}
          />
          {cartItem?.length === 0 ? (
            <CartEmpty onChangeToggle={onChangeToggle} />
          ) : (
            <div>
              <div>
                {cartItem?.map((el, i) => (
                  <CartItem key={i} el={el} />
                ))}
              </div>
            </div>
          )}
          <div className="fidex_items_end">
            <div className=" text_items_end">
              <h3>SubTotal</h3>
              <h3 className="price_end_total">${totalAmmount}</h3>
            </div>
            <div className="btn_section">
              <p>Taxes and Shipping Will Calculate At Shipping</p>
              <button type="button">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
