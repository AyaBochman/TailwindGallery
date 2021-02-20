import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Pagination from './Pagination';

const Main = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const slicedData = data.slice(firstIndex, lastIndex);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum)
    };

    const handleArrowClick = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="font-sans">
            <Navbar title={'Welcome to Tailor Brands Gallery'} />
            {/* desktop and tablet */}
            <div className="container my-12 mx-auto px-4 md:px-12 hidden md:block">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {slicedData && slicedData.map((item, i) => {
                        return <Card key={`card-${i}`} headline={item.headline} image={item.image} subHeadline={item.subHeadline} />
                    })}
                </div>
                <Pagination itemsPerPage={6} totalItemsLen={data.length} handlePageChange={handlePageChange} handleArrowClick={handleArrowClick} currentPage={currentPage} />
            </div>
            {/* mobile */}
            <div className="container my-4 mx-auto px-4 md:px-12 block md:hidden">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {data && data.map((item, i) => {
                        return <Card key={`card-${i}`} headline={item.headline} image={item.image} subHeadline={item.subHeadline} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;