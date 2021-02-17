import React from 'react';

const Card = ({ headline, image, subHeadline }) => {

    return (
        <div className="my-4 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex transform transition duration-400 hover:scale-105">
            <article className="overflow-hidden rounded-lg shadow-lg w-full">
                <a href="#">
                    <img alt="Placeholder" className="block h-64 w-full object-cover" src={image && image[0].url} />
                </a>
                <header className="flex items-center justify-between leading-tight px-2 pt-2 md:px-4">
                    <h1 className="text-lg font-semibold">
                        <a className="no-underline hover:underline text-gray-800" href="#">
                            {headline}
                        </a>
                    </h1>
                </header>
                <p className="px-2 md:px-4 pb-3  text-gray-700">{subHeadline}</p>
            </article>
        </div>
    );
};

export default Card;