import { useEffect, useState } from "react"
import Link from "next/link"
import { useMarketplace } from "@thirdweb-dev/react"
import NFTCard from "./NFTCard"

const style = {
    wrapper: `mx-auto grid max-w-fit flex-1 drid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`
}

const Listings = () => {
    const [listings, setListings] = useState([])
    const marketplace = useMarketplace("0x2824497e30dc2DeF6e10571925918C59DAFeb796")



    useEffect(() => {
        getListings()
    }, [])    
    
    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            setListings(list)
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <div className={style.wrapper}>
            {listings.length > 0 ? (
               <>
               {listings?.map((item,index) => (
                <Link href = {`/assets/${item.assetContractAddress}/${item.id}`}
                key  = {index}>
                    <a>
                        <NFTCard item = {item} />
                    </a>
                </Link>
               ))}
               </> 
            ) : (<div>Loading...</div>)}
        </div>
    )
}

export default Listings