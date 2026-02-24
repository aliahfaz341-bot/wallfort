import React, { useEffect, useState } from 'react'

const Getapi = () => {

    const [page, setPage] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${currentpage}&_limit=1`
        )
            .then((response) => response.json())
            .then((json) => { setPage(json) })
            .then((json) => console.log(json));
    }, [currentpage]);

    const next = () => {
        if (currentpage < 100) {
            setCurrentpage(currentpage + 1);
        }
    };

    const previous = () => {
        if (currentpage > 1) {
            setCurrentpage(currentpage - 1);
        }
    };
    return (
        <div>
            {
                page.map((page, index) => (
                    <div key={index}>
                        <p>Id: {page.id}</p>
                        <p>Title:  {page.title}</p>
                    </div>
                ))
            }

            {/* Next */}
            <button style={{ padding: '10px' }} onClick={next}>Next</button>

            {/* Previous */}
            <button style={{ padding: '10px' }} onClick={previous}>Previous</button>
        </div >
    )
}

export default Getapi
