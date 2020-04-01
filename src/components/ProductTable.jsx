import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

function ProductTable(props) {
    const { data } = props;
    function categoryFiltered(data) {
        const category = data.map(cat => cat.category);
        const categoryFiltered = [];
        category.forEach(item => {
            if(!categoryFiltered.includes(item)) {
                categoryFiltered.push(item);
            }
        });
        return categoryFiltered;
    }

    function productFiltered(products, category) {
        return products.filter(item => item.category === category);
    }

    return (
        <React.Fragment>
            <div className="ProductTable-header">
                <div>Name</div>
                <div>Price</div>
            </div>
            {
                categoryFiltered(data).map((categoryName, index) => {
                    return <React.Fragment key={index}>
                        <ProductCategoryRow  
                            categoryHeader={categoryName+index}
                            key={categoryName}/>
                        {
                            productFiltered(data, categoryName).map(item => {
                                return <ProductRow 
                                    key={categoryName+index+item.name}
                                    name={item.name}
                                    price={item.price}
                                    stocked={item.stocked}/>
                            })
                        }
                     </React.Fragment>
                })
            }
        </React.Fragment>
    )
}

export { ProductTable };