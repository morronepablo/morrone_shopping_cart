import { Item } from "../item/item"
import { NotFound } from '../../pages/notFound/notFound'
import './itemList.css'

export const ItemList = ({ items, isCategory, id }) => {
 
    return (
        <>
        {isCategory || id === undefined ? 
            <div className='product-container'>
                {items.map((item) => (
                    <Item key={item.id} item={item} /> 
                ))}
            </div>
        :
        <NotFound />
        }
    </>
    )
    
}