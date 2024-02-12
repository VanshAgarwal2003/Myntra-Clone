import React from 'react'
import BagSummary from '../component/BagSummary'
import BagItemContainer from '../component/BagItemContainer'
import { useSelector } from 'react-redux';

export default function Bag() 
{
    const bag = useSelector((store) => store.bag);
    const items = useSelector((store) => store.items);

    const showBagItems = (value) => {
       const element = items.find((item) => item.id === value);
       return element ? <BagItemContainer key={element.id} item={element} /> : null;
    }

    return (
        <>
            <main>
                <div className="bag-page">
                    {bag.map(showBagItems)}
                    <BagSummary></BagSummary>
                </div>
            </main>
        </>
    )
}
