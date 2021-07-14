import { Item } from "../item/item"
import { NotFound } from '../../pages/notFound/notFound'
import './itemList.css'

export const ItemList = ({ items }) => {

    if(items.length > 0){
        return (
            <div className='product-container'>
            {items.map((item) => (
                <Item key={item.id} item={item} /> 
            ))}
        </div>
        )
    } else {
        return (
            <NotFound />
        )
    }

    
}