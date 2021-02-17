import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Pagination from './Pagination';

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
                <div class="hidden md:block">
                <Pagination itemPerPage={6} totalItemsLen={data.length}/>
                </div>
               

            </div>
        </div>
    );
};

export default Main;