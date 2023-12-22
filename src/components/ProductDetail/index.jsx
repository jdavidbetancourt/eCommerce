import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside  
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button className='cursor-pointer'
                onClick={() => context.closeProductDetail()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                </button>
            </div>
            <figure className='flex px-6 justify-center '>
                <img 
                    className='w-auto h-80 rounded-lg' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail