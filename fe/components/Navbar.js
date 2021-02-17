import React from 'react';

const Navbar = ({title}) => {
    return (
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <h2 class="text-2xl font-bold leading-7 text-gray-50 sm:text-3xl sm:truncate">
                            {title}
    </h2>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;