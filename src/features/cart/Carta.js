import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { 
  deleteItemFromCartAsync, 
  selectCartStatus, 
  selectItems, 
  updateCartAsync } from './cartSlice.js';
import { discountedPrice } from '../../app/constants.js';
import { CirclesWithBar } from 'react-loader-spinner';





export default function Carta() {

  const [open, setOpen] = useState(true)
  const dispatch = useDispatch();
  const status = useSelector(selectCartStatus);



  const items = useSelector(selectItems);
  const totalAmount = items.reduce((amount, item) => discountedPrice(item.product)*item.quantity + amount, 0);
  const totalItems = items.reduce((total, item) => item.quantity + total, 0)


  // We use here updateItem but in tutorial it have use updateCart

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id:item.id, quantity: +e.target.value }));
  };


  //////////////////////////////////////////////////////////////////////

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id))
  }




  return (


    <>

      {!items.length && <Navigate to='/' replace={true}></Navigate>}

      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className='text-3xl font-bold tracking-tighter text-gray-900 '>Cart</h2>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            {status === 'loading' ? <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            /> : null}
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.product.href}>{item.product.title}</a>
                        </h3>
                        <p className="ml-4">${discountedPrice(item.product)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor='quantity'
                          className='inline mr-5 text-sm font-medium leading-6 text-gray-900'
                        >
                          Qty

                        </label>
                        <select
                          onChange={(e) => handleQuantity(e, item)}
                          value={item.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                      </div>

                      <div className="flex">
                        <button
                          onClick={e => handleRemove(e, item.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200  my-5 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal:</p>
            <p>${totalAmount}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total Items:</p>
            <p>{totalItems}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>


      </div>

    </>
  );
}
