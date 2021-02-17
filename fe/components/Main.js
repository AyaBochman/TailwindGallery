import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';

const Main = ({ data }) => {

    useEffect(() => {
        console.log('data', data);
    }, [])

    return (
        <div>
            <Navbar title={'Welcome to Tailor Brands Gallery'} />
            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">


                    {data && data.map((item, i) => {
                        return <Card key={i} headline={item.headline} image={item.image} subHeadline={item.subHeadline} />
                    })}

                </div>

            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CLICK</button>
        </div>
    );
};

export default Main;