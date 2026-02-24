import React, { useEffect, useState } from 'react'

const Page = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [inputId, setInputId] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=2`
                );
                const link = response.headers.get('link');
                const json = await response.json();
                setData(json);
                console.log("Link:", link);
                console.log("Data:", json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [page]);

    console.log("page", page)

    return (
        <div style={{ margin: '1%' }}>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </div>
            ))}

            {/* ON CLICK SUBBMIT BUTTON  */}
            <input type='text' placeholder='GIVE ID' style={{ padding: '15px' }} onChange={(e) => setInputId(e.target.value)}></input>
            <button onClick={(e) => {
                setPage(Number(inputId))
            }} style={{ padding: '10px' }}>Submit</button>

            <button style={{ padding: '8px' }} onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <button style={{ padding: '8px' }} onClick={() => setPage(page + 1)} >Next</button>
        </div >
    )
}
export default Page