import React from 'react'
import HomeContent from '../component/HomeContent.jsx'
import { useSelector } from 'react-redux'

export default function Home() {
    const item = useSelector((store) => store.items);

    const retrieveItem= (value) => {
        return <HomeContent item={value}/>
    }
     
    return (
        <>
            <main>
                <div className="items-container">
                    {item.map(retrieveItem)}
                </div>
            </main>
        </>
    )
}
