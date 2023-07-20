import React from 'react';
import image_1 from '../../images/image_1.jpg';
import salad from '../../images/salad.jpg';

const Cart = () => {
    return (
        <>
         <div className="cart_container grid grid-cols-4 pl-12">
           <div className="left_side_bar flex flex-col ">
             <img src={image_1} alt="" class="w-48"/>
             <input className='bg-transparent py-1 w-48' type="text" placeholder='Find Product' />

             <div className="all_buttons flex flex-col text-white">
                <button className='px-3 w-48 py-2 border'>ALL</button>
                <button className='px-3 w-48 py-2 border'>APPETIZER</button>
                <button className='px-3 w-48 py-2 border'>BEEF CURRY</button>
                <button className='px-3 w-48 py-2 border'>MOMO</button>
                <button className='px-3 w-48 py-2 border'>SHAKES</button>
             </div> 
           </div>

           <div className="food_items flex flex-col col-span-2">
             <div className="food_details grid grid-cols-4 py-2 w-11/12 border-2">
             <div className="food_image pl-3">
                <img src={salad} alt="" className='w-32 rounded'/>
             </div>
             <div className="food_details text-white col-span-2">
                 <h4 className='mt-2 mb-2'>BBQ Wings(6 Pcs)</h4> 
                 <div className="price flex flex-row">
                   <button class="bg-transparent hover:bg-blue-500 text-white text-xs font-semibold hover:text-white mt-1 ml-2 mr-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                   view more
                    </button>
                   <p>Tk:210</p>
                 </div>
             </div>
             <div className="add_button">
                {/* <button className='px-4 py-1 ml-50 text-cyan-500 border-2'>ADD</button> */}
                <button id="image1_id" class="mt-4 bg-transparent hover:bg-blue-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ADD
                    </button>
              </div>
             </div>
              
              {/*  */}
              <div className="food_details grid grid-cols-4 py-2 w-11/12 border-2">
             <div className="food_image pl-3">
                <img src={salad} alt="" className='w-32 rounded'/>
             </div>
             <div className="food_details text-white col-span-2">
                 <h4 className='mt-2 mb-2'>BBQ Wings(6 Pcs)</h4> 
                 <div className="price flex flex-row">
                   <button class="bg-transparent hover:bg-blue-500 text-white text-xs font-semibold hover:text-white mt-1 ml-2 mr-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                   view more
                    </button>
                   <p>Tk:210</p>
                 </div>
             </div>
             <div className="add_button">
                {/* <button className='px-4 py-1 ml-50 text-cyan-500 border-2'>ADD</button> */}
                <button class="mt-4 bg-transparent hover:bg-blue-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ADD
                    </button>
              </div>
             </div>
            
            {/*  */}
            <div className="food_details grid grid-cols-4 py-2 w-11/12 border-2">
             <div className="food_image pl-3">
                <img src={salad} alt="" className='w-32 rounded'/>
             </div>
             <div className="food_details text-white col-span-2">
                 <h4 className='mt-2 mb-2'>BBQ Wings(6 Pcs)</h4> 
                 <div className="price flex flex-row">
                   <button class="bg-transparent hover:bg-blue-500 text-white text-xs font-semibold hover:text-white mt-1 ml-2 mr-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                   view more
                    </button>
                   <p>Tk:210</p>
                 </div>
             </div>
             <div className="add_button">
                {/* <button className='px-4 py-1 ml-50 text-cyan-500 border-2'>ADD</button> */}
                <button class="mt-4 bg-transparent hover:bg-blue-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ADD
                    </button>
              </div>
             </div>

            {/*  */}
            <div className="food_details grid grid-cols-4 py-2 w-11/12 border-2">
             <div className="food_image pl-3">
                <img src={salad} alt="" className='w-32 rounded'/>
             </div>
             <div className="food_details text-white col-span-2">
                 <h4 className='mt-2 mb-2'>BBQ Wings(6 Pcs)</h4> 
                 <div className="price flex flex-row">
                   <button class="bg-transparent hover:bg-blue-500 text-white text-xs font-semibold hover:text-white mt-1 ml-2 mr-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                   view more
                    </button>
                   <p>Tk:210</p>
                 </div>
             </div>
             <div className="add_button">
                {/* <button className='px-4 py-1 ml-50 text-cyan-500 border-2'>ADD</button> */}
                <button id="add" class="mt-4 bg-transparent hover:bg-blue-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ADD
                    </button>
              </div>
             </div>
            </div>

           <div className="cart_items_calculation"></div>
         </div> 
        </>
    );
};


export default Cart;