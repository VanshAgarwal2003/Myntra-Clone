import React from 'react'
import { useSelector } from  'react-redux';

export default function BagSummary() 
{
    const bag=useSelector((store)=>store.bag)
    const item=useSelector((store)=>store.items)

    const bagCurrentItems=item.filter((value)=> bag.includes(value.id))

    const  CONVENIENCE_FEES=99;
    let totalItem = bag.length;
    let totalMRP = 0;
    let totalDiscount = 0;

  
    bagCurrentItems.forEach(bagItem => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
  
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


    return (
        <>
            <div class="bag-details-container">
                <div class="price-header">PRICE DETAILS {totalItem} Items </div>
                <div class="price-item">
                    <span class="price-item-tag">Total MRP</span>
                    <span class="price-item-value">₹{totalMRP}</span>
                </div>
                <div class="price-item">
                    <span class="price-item-tag">Discount on MRP</span>
                    <span class="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div class="price-item">
                    <span class="price-item-tag">Convenience Fee</span>
                    <span class="price-item-value">₹99</span>
                </div>
                <hr/>
                    <div class="price-footer">
                        <span class="price-item-tag">Total Amount</span>
                        <span class="price-item-value">₹{finalPayment}</span>
                    </div>
            </div>
            <button class="btn-place-order">
                <div class="css-xjhrni">PLACE ORDER</div>
            </button>
        </>
    )
}
