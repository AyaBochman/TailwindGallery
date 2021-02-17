import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, totalItemsLen, handlePageChange, handleArrowClick, currentPage }) => {
    const numOfPages = Math.ceil(totalItemsLen / itemsPerPage);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [isActive, setActive] = useState({ 1: true });

    useEffect(() => {
        const pages = [];
        for (let i = 1; i <= numOfPages; i++) {
            pages.push(i);
        }
        setPageNumbers(pages);
    }, []);

    const onArrowClick = (direction) => {
        let newPage;
        switch (direction) {
            case 'next':
                newPage = currentPage + 1;
                if (newPage <= pageNumbers[pageNumbers.length - 1]) {
                    console.log('newpage', newPage);
                    setActive({ [newPage]: true })
                    handleArrowClick(newPage);
                    break;
                }

            case 'prev':
                newPage = currentPage - 1;
                if (newPage >= pageNumbers[0]) {
                    console.log('newpage', newPage);
                    setActive({ [newPage]: true })
                    handleArrowClick(newPage);
                    break;
                }
            default:
                break;
        }
    }

    const onPageClick = (number) => {
        setActive({ [number]: true });
        handlePageChange(number)

    }


    return (
        <div className="flex justify-center m-4">
            {numOfPages > 1 && <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            {currentPage > 1 && <button onClick={() => onArrowClick('prev')} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>}

                            {pageNumbers.map((number, i) => {
                                return <button key={`num-${i}`} onClick={() => onPageClick(number)} className={`btn relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none ${isActive[number] ? 'bg-gray-300' : ''}`}>
                                    {number}
                                </button>
                            })}
                            {currentPage < pageNumbers[pageNumbers.length - 1] && <button onClick={() => onArrowClick('next')} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>}
                        </nav>
                    </div>
                </div>
            </div>}

        </div>

    );
};

Pagination.propTypes = {
    itemsPerPage: PropTypes.number,
    totalItemsLen: PropTypes.number,
    totalItemsLen: PropTypes.number,
    handlePageChange: PropTypes.func,
    handleArrowClick: PropTypes.func,
    currentPage: PropTypes.number
};

export default Pagination;

