export default function Child(productData) {
    let {name,price,quant,sale} = productData

    return (
        <>
        <div className="container-fluid">
            <h1 className="bg-dark text-light text-center p-4">Child</h1>
        </div>
        <div className="container bg-info p-3">
            <h3 className="text-center"><strong>productData</strong></h3>
            <h4>Name:{name}</h4>
            <h4>Price:{price}</h4>
            <h4>Quant:{quant}</h4>
            <h4>Sale:{sale? '50%' : '0%'}</h4>

        </div>
        </>
    );
}
