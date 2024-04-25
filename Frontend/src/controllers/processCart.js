import cart from '../SampleData/cart';
import orders from '../SampleData/orders';


const handleAddToCard = async (currItem)=>{
    alert("Added to cart");
/*
    try {
        const res = await fetch("" , {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({item : currItem})
        })
        // (res.ok)?{console.log('Success')}:alert('Failed');
        if (res.ok) {
            console.log('Request successful');
        } else {
            console.error('Request failed:', res.statusText);
        }
    } catch (error) {
        console.log("error while adding new items to cart : " , error)
        
    }
*/

    // orders.push(currItem)
    cart.push(currItem);
    console.log("orders = " , cart);
}


const handleBuyNow = async (currItem)=>{
    /*
    try {
        const res = fetch("" , {
            method:'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({order:cart, userID:"1234567890"}), 
        })
        if(res.ok){
            console.log("Order placed successfully")
        }else{
            console.log("Error in placing the order")
        }
    } catch (error) {
        console.log("error while processing Buying request :",error)
    }

    */

    orders.push(currItem);
    console.log("orders = ", orders);
}

export default  [handleAddToCard ,handleBuyNow];