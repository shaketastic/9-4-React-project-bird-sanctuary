import bonusItems from "../data/bonusItems";

//The cart has a class name of `Cart`
//When I click on a bird card's adopt button
//its name appears in the cart as an `<ol>` list item.
// The total shows up as an `<h4>` element inside the cart
// When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// When there are less than 3 birds in the cart there is a 0% discount
// When there are 3 or more birds in the cart there is a 10% discount
//let elem = birds.elem((a, b) => {return b.amount + a}, 0)

function Cart({birdCart, total, handleRemove}) {

    return (
        <div className="Cart">
            <h4>Cart</h4>
            <p>Discount: ({birdCart.length >= 3 ? 10 : 0})%</p>
            <h2>Total: ${birdCart.length >=3 ? total * 0.9 : total}</h2>
            
        <ol>
        {birdCart.map((bird) => {

            return (
            <li key={bird.id}> 
            {bird.name}: ${bird.amount}
            <button onClick={() => handleRemove(bird.id)}>Remove Me</button>
            </li>
            );
        })}
        </ol>

        <p>Your donations have qualified you for the following items:</p>
            <ul>
            {total >= 100 ? <li>{bonusItems[0]}</li> : null}
            {total >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
            {total >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
            {total >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
            </ul>
        </div>
    );
}


export default Cart;