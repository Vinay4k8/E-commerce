"use client";

import { ShoppingCart } from 'lucide-react';
import Button from './ui/Button'
import useCart from '@/hooks/use-carts'
import { Product } from '@/types';
import { MouseEventHandler } from 'react';

const AddToCart = ({data}:{data:Product}) => {

    const cart=useCart()
    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        cart.addItem(data);
    }
  return (
    
    <Button onClick={onAddToCart} 
    className="flex items-center gap-x-2">
        Add To Cart
        <ShoppingCart />
    </Button>
  )
}

export default AddToCart