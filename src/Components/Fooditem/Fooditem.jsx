import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./Fooditem.css"
import { StoreContext } from "../Context/StoreContext"

const Fooditem = ({ id, name, price, description, image }) => {
  
  const{cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItem[id]
          ? <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} />
          : <div className="food-item-count">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>

      <p className="food-item-description">{description}</p>
      <p className="food-item-price">${price}</p>

    </div>
  )
}

export default Fooditem
