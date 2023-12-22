import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        // Chat GPT
        context.setCount((prevCount) => prevCount + 1);
        // context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]) 
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = () => {
        const isInCart = context.cartProducts.some(product => product.id === data.data.id)

        if (isInCart) {
            return (
                <button 
                        className='absolute top-0 right-0 flex justify-center items-center bg-black/60
                        w-6 h-6 rounded-full m-2 p-1' >                       
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" data-slot="icon" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                </button>
            )
        } else {
            return(
                <button 
                        className='absolute top-0 right-0 flex justify-center items-center bg-white/60
                        w-6 h-6 rounded-full m-2 p-1'    
                        onClick={(event) => addProductsToCart(event, data.data)}>                       
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>    
                </button>   
            )
        }
        
    }

    return (
        <article 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg' 
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.toUpperCase()}</figcaption>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </article>
    )
}

export default Card