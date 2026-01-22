import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(1);
    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
}

export default ItemCount;