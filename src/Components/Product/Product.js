import React from 'react';

const Product = (props) => {
    console.log(props);
    const { name, description, sku, price, quantity, images } = props.products;

    return (
        <div>
            <div className="card mb-3 mx-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={images[0].images} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Quantity: {quantity}</li>
                            <li className="list-group-item">SKU: {sku}</li>
                            <li className="list-group-item">Price: ${price}</li>
                            <li className="list-group-item"><div className="input-group number-spinner w-50">
                                <button onClick={() => props.handleDecrement()} id="case-minus" className="btn btn-default"><i className="fas fa-minus"></i></button>
                                <input
                                    readOnly
                                    id="case-number" type="number" min="0" className="form-control text-center" value={props.qty} />
                                <button onClick={() => props.handleIncrement()} id="case-plus" className="btn btn-default"><i className="fas fa-plus"></i></button>

                            </div></li>
                        </ul>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;