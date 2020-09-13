import React, { useState, useEffect } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {


    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(basket.map(item => item.price).reduce((prev, curr) => prev + curr, 0))
    }, [basket])
    
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={total}
            displayType={'text'}
            thousandSeprator={true}
            prefix={'$'}
            />

            <button onClick={r => history.push(user ? '/payment' : '/login')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
