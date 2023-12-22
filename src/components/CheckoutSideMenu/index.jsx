import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        
        // Actualiza el estado del carrito y disminuye el contador
        context.setCartProducts(filteredProducts)
        // Chat GPT
        context.setCount((prevCount) => prevCount - 1);
        // context.setCount(context.counter - 1)
    }

    

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        // Agrega la orden al historial de pedidos y reinicia el carrito
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        // Reiniciamos el contador
        context.setCount(0)
        // Reiniciamos el input para que se muestren todos los productos
        context.setSearchByTitle(null)
    }

    

    return (
        <aside  
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button 
                    className='cursor-pointer'
                
                    onClick={() => context.closeCheckoutSideMenu()}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
            <div className='px-6 flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-medium'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts).toFixed(2)}</span>
                </p>
                <Link to='my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={handleCheckout}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu