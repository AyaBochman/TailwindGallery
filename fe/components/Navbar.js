import React from 'react';

const Navbar = ({title}) => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-center h-16">
                        <h2 className="text-xl md:text-2xl font-bold leading-7 text-gray-50 sm:text-3xl sm:truncate">
                            {title}
    </h2>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;