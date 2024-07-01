import React, { useState } from 'react'
import MenuItem from './MenuItem';
import Loader from '../component/Loader';
import { useSelector } from 'react-redux';
import { getTotalItems } from '../cart/cartSlice';
const rand = Math.floor(Math.random()*(6-3)+3)

const Menu = () => {
	let menu = [
		{
			"name":"Capricciosa",
			"details":"Tomato, Mozzarella, Ham, Mushrooms, Artichoke",
			"price":10.00,
		},
			
		{
			"name":"Margherita",
			"details":"Tomato, Mozzarella, Basil",
			"price":12.00,
		},
		
		{
			"name":"Romana",
			"details":"Tomato, Mozzarella, Prosciutto",
			"price":15.00
		},

		
		{
			"name":"Diavola",
			"details":"Tomato, Mozzarella, Spicy Salami, Chili Flakes",
			"price":16.00
		},
			
		{
			"name":"Prosciutto e Rucola",
			"details":"Tomato, Mozzarella, Prosciutto, Arugula",
			"price":16.00
		},
		
		{
			"name":"Vegetale",
			"details":"Tomato, Mozzarella, Bell Peppers, Onions, Mushrooms",
			"price":13.00
		},

		{
			"name":"Napoli",
			"details":"Tomato, Mozzarella, Fresh Tomato, Basil",
			"price":16.00
		},

		{
			"name":"Pepperoni",
			"details":"Tomato, Mozzarella, Pepperoni",
			"price":14.00
		},

		{
			"name":"Hawaiian",
			"details":"Tomato, Mozzarella, Pineapple, Ham",
			"price":15.00
		},

		{
			"name":"Spinach and Mushroom",
			"details":"Tomato, Mozzarella, Spinach, Mushrooms",
			"price":15.00
		},
		
	]
	const url = "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-"
	// remove the rand var to dissolve the randomness
	for(let i = 1;i<=menu.length;i++){
		menu[i-1].id = i-1	
		menu[i-1].imgUrl = url+`${i}.jpg`
		menu[i-1].soldOut = i % rand == 0 ? true : false; 
		
	}
	

	const total_items = useSelector(getTotalItems)
	
	return (
		<>
		{/* <div className="flex justify-end right-6 sm:right-2 mt-6 mr-20 fixed">{total_items}/20 items</div> */}
		
		<ul className="divide-y px-4 divide-slate-400 py-4 divide-opacity-50 " >
		{/* <ul className="grid grid-cols-2 gap-4 py-4"> */}
			{menu.map((pizza,index)=>(
				<MenuItem pizza={ pizza } key={index} />
			))}
		</ul>
		</>
		
		
	)
}

export default Menu;