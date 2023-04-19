import React from 'react'

const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className='main-card-cointainer grid grid-cols-3 gap-4 w-70'>
                {menuData.map((curelem) => {
                    return (
                        <div className='container mx-auto' key={curelem.id}>
                            <div className="card  mt-5 ">
                                <div className="card-body border border-spacing-1 rounded-lg m-9 p-4 bg-emerald-500">
                                    <span className="card-number border-2 border-gray-100 rounded-3xl px-2 my-2">{curelem.id}</span>
                                    <span className='card-author block text-gray-100 my-2 uppercase'>{curelem.category}</span>
                                    <h2 className='card-title text-3xl my-2 font-serif text-gray-700 up'>{curelem.name}</h2>
                                    <p className='card-description text-gray-100'>{curelem.description}</p>
                                    <hr className=" my-3 border border-gray-100 " />
                                    <span className="card-read cursor-pointer">Read More</span>
                                    <img src={curelem.image} alt='maggi' className='h-56 w-full' />
                                    
                                <div className='order cursor-pointer block w-full bg-amber-400 text-center mt-5 rounded-full py-1'>Order Now</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </section>
        </>
    )
}
export default MenuCard
