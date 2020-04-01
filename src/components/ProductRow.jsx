import React from 'react';

function ProductRow(props) {
    return (
        <div className={`ProductRow ${!props.stocked ? 'stocked': ''}`}>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export { ProductRow };
