import React, { useState } from 'react';

const Pages = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [inputId, setInputId] = useState("");

    // API call function
    const fetchData = async (pageNum) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=2`
            );
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div style={{ margin: '1%' }}>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.title}</p>
                    </div>
                ))
            ) : (
                <p>Give Id & Click On Submit Button</p>
            )}

            {/* Input + Submit */}
            <input
                type="text"
                placeholder="GIVE ID"
                style={{ padding: '15px' }}
                onChange={(e) => setInputId(e.target.value)}
            />
            <button
                onClick={() => {
                    const num = Number(inputId);
                    if (!num) return; // avoid invalid input
                    setPage(num);
                    fetchData(num); // Call API only on submit
                }}
                style={{ padding: '10px' }}>
                Submit
            </button>

            {/* Prev / Next buttons (work only after first submit) */}
            <button
                style={{ padding: '8px' }}
                onClick={() => {
                    const prevPage = page - 1;
                    if (prevPage < 1) return;
                    setPage(prevPage);
                    fetchData(prevPage);
                }}
                disabled={page === 1 || data.length === 0}>
                Previous
            </button>
            <button
                style={{ padding: '8px' }}
                onClick={() => {
                    const nextPage = page + 1;
                    setPage(nextPage);
                    fetchData(nextPage);
                }}
                disabled={data.length === 0}>
                Next
            </button>
        </div>
    );
};

export default Pages;