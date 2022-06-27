import React, { useState, useEffect } from 'react'


function Pagination({ showPerPage, onPaginationChange, total }) {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)

    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            }
            else {
                setCounter(counter + 1)
            }
        }


    }

    return (
        <div className='pagination-main'>
            <div className='btn1'>
                <button
                    className='btn-primary  '
                    onClick={() => onButtonClick('prev')}>
                    Previous
                </button>
            </div>
            <div className='btn2'>
            <button
                className=' btn-primary'
                onClick={() => onButtonClick('next')}>
                Next
            </button>
            </div>

        </div>
    )
}

export default Pagination