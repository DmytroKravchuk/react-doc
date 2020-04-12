import React from 'react';

const ProductRow = ({name, price, stocked}) => {
    return (
        <div className={`ProductRow ${!stocked ? 'stocked': ''}`}>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export { ProductRow };
