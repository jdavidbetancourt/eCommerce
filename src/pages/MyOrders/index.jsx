import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';
import OrdersCard from '../../components/OrdersCard'
import Layout from '../../components/Layout'



function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-lg m-4'>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            key={index}
            orderId={index} 
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts} 
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
