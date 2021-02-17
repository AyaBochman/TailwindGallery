import React from 'react';

const Card = ({ headline, image, subHeadline }) => {

    return (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex">
            <article class="overflow-hidden rounded-lg shadow-lg w-full">
                <a href="#">
                    <img alt="Placeholder" class="block h-64 w-full object-cover" src={image && image[0].url} />
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            {headline}
                        </a>
                    </h1>
                </header>
                <p class="pl-2 md:pl-4 pb-3">{subHeadline}</p>
            </article>
        </div>
    );
};

export default Card;