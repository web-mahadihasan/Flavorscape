import { useEffect, useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaRegTrashCan } from "react-icons/fa6";

const DashboardCart = () => {
    const [cart] = useCart();

    const totalPrice = cart.reduce((prev, curr) =>  (prev + curr.price) ,0)
    
    return (
        <div className="max-w-3xl mx-auto px-4 xl:px-0 my-16">
            <div className="my-6">
                <SectionTitle title={"Wanna Add More"} subtitle={"--- My Cart ---"}/>
            </div>

            {/* User Cart Item  */}
            <section className="bg-white p-8 rounded">
                <div className=" flex items-center font-cinzel justify-between font-semibold text-xl">
                    <h3>Total Orders: {cart?.length}</h3>
                    <h3>Total Price: $ {totalPrice}</h3>
                    <button className="px-4 py-2 bg-yellow rounded-md text-white text-lg hover:bg-dark-black duration-300">Pay Now</button>
                </div>
                <div className="divider"></div>
                
                {/* Cart Item Table  */}
                <div className="overflow-x-auto overflow-y-hidden">
                    <table className="table rounded-lg">
                        {/* head */}
                        <thead className="bg-yellow">
                        <tr className="uppercase font-inter font-medium">
                            <th>
                                SL No. 
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            cart?.map((menu, idx) =>  <tr key={menu._id} className="font-inter text-base text-gray-500">
                                <th>
                                <label>
                                    {idx + 1}
                                </label>
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="rounded h-14 w-20">
                                            <img className="w-16"
                                            src={menu.image}
                                            alt="" />
                                        </div>
                                    </div>
                                   
                                </div>
                                </td>
                                <td>
                                    {menu.name}
                                </td>
                                <td>
                                    <div className="flex items-center gap-1 border justify-center rounded-md border-gray-300">
                                        <button className="bg-orange-400 w-full px-1.5 rounded-l text-white font-bold">-</button>
                                        <input type="text" readOnly name="" id="" value={1} className="w-5 px-1 border-none outline-none"/>
                                        <button className="bg-emerald-500 w-full px-1.5 text-white font-bold rounded-r">+</button>
                                    </div>
                                </td>
                                <td>$ {menu.price}</td>
                                <th>
                                <button className="btn-ghost p-2 duration-300 rounded-full"><FaRegTrashCan size={22} className="text-red-600"/></button>
                                </th>
                            </tr>)
                        }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DashboardCart;