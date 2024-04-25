import {useEffect, useState} from 'react';
import { useAppStore } from '../States/store';
import Card from '../components/Card';
const typeOfShops = [
    {id:1 , name:"kenara" },
    {id:2 , name:"Medical" },
    {id:3 , name:"Genaral" },
    {id:4 , name:"kenara" }
]

const cats = [
    {id:1 , name:"Food" },
    {id:2 , name:"Tablates" },
    {id:3 , name:"fast Food" },
    {id:4 , name:"Cake" }
]

function Home() {
    const isShowAccordingToShopType = useAppStore(state => state.showAccordingToTypeOfShops);
    const [whatToRender, setWhatToRnder] = useState(typeOfShops);
   
    useEffect(()=>{
            if (!isShowAccordingToShopType) {
                setWhatToRnder(cats);
            }
    },[isShowAccordingToShopType])
  return (
    <div className='home'>
        <div className="banner"></div>
        <div className="catOrShoptypediv">
            {whatToRender.map((cat)=>(<div className='catOrShop' key={cat.id}><h2>{cat.name}</h2> </div>))}
        </div>
        <hr />
        <Card/>
    </div>
  )
}

export default Home