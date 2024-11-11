import {Component} from 'react';

class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
            ProductLists:props.ProductLists
        }
    }
    render(){
        return(
            <div>
                <div><h2  style={{margin: '50px 200px'}} >Your Cart Items</h2></div>
                {this.state.ProductLists.products.map((product, index)=>(
                <div className="product-item" style={{margin: '0px 200px'}} key={index}>
                <div key={index}>{product.desc}</div>
                <div className="nowrap-left">
                    <div>
                    <img 
                        className="product_image" 
                        src={product.image} 
                        alt={product.desc}
                        onClick={() => this.handleShowModal(product)}
                        style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="d-flex gap-2">
                    
                    </div>
                    <div className="nowrap-left ms-3" style={{marginTop:'-25px'}}>
                    <div><span> Quantity </span><span>{product.value}</span></div>
                    </div>
                </div>
                </div>
                ))
            }
        </div>)
    }
}
    
export default Cart;