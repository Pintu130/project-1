import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div>
                {/* <!-- Main navigation container --> */}
                <nav
                    className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
                    data-te-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <div
                            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                            id="navbarSupportedContent4"
                            data-te-collapse-item>
                            {/* <!-- Navbar title --> */}
                            <a className="pr-2 text-xl font-semibold text-white" href="#">Navbar</a>
                            {/* <!-- Left navigation links --> */}
                            <ul
                                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                                data-te-navbar-nav-ref>
                                {
                                    menuList.map((curelem) => {
                                        return (
                                            <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref>
                                                <a
                                                    className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                                    href="#"
                                                    data-te-nav-link-ref
                                                    onClick={() => filterItem(curelem)}>{curelem}</a
                                                >
                                            </li>
                                        )
                                    })
                                }
                                {/* <!-- Dashboard link --> */}

                                {/* <!-- Team link --> */}
                                {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href="#"
                                        data-te-nav-link-ref
                                        onClick={() => filterItem("lunch")}>Lunch</a
                                    >
                                </li> */}
                                {/* <!-- Projects link --> */}
                                {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href="#"
                                        data-te-nav-link-ref
                                        onClick={() => filterItem("dinner")}>Dinner</a
                                    >
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
