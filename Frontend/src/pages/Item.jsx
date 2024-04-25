import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import items from '../SampleData/items';
import  handleAddToCard from '../controllers/processCart.js'
import handleBuyNow from '../controllers/processCart.js'

function Item() {
    
    const [currItem , setItem ] = useState();
    const {id} = useParams();

    useEffect(()=>{        
        /*
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.postId}`)
            .then(response => response.json())
            .then (data => setItem(data))
        */
       if(id){
           setItem(items[id]);  
       }
    },[id])

    return(
        <div>
            {currItem ? (
                <div>
                    {console.log(currItem)}
                    <div className='itemPage'>
            <div  className='ipfh'>
                <div className='imgdiv'>
                    {console.log("{currItem.img} ", currItem.img)}
                    <img src={currItem.img} alt="product" />
                </div>
                <div className='iteminfo'>
                    <h2>{currItem.name}</h2>
                    <span>{currItem.price}$</span>
                    <p>{currItem.description}</p>
                    <button onClick={() => handleAddToCard(currItem)}>Add To Cart!</button>
                    <button onClick={() => handleBuyNow(currItem)}>Buy Now!</button>
                </div>
            </div>
            <div  className='ipsf'>
                {currItem.reviews.map(review => (<p key={currItem.id}>{review}</p>))}
            </div>
        </div>

                </div>
            ) : (
                <h1>Please sign up.</h1>
            )}
    </div>
    )
}

export default Item

