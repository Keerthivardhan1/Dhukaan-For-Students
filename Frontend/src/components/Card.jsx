// import {react} from 
import { useNavigate } from 'react-router-dom'
import reactimg from '../assets/img/f1.png'
export default function Card() {
  const navigate = useNavigate()
  const handleBuy = ()=>{
    console.log("clicked")
    navigate(`/item/${3}`)
  }
  return (
    <div className='card'>
        <img src={reactimg} alt="" />
        <div>
            <span><h3>Name</h3></span>
            <span>30$</span>
        </div>
        <button>Add Cart</button>
        <button onClick={handleBuy} >Buy</button>
    </div>
  )
}
