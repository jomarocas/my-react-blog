import React, { useState, useEffect } from 'react';

export default function Crud() {
    // Declare a new state variable, which we'll call "count"
    const [count, sCount] = useState(5);
    useEffect(() => {
        fetchData()
        async function fetchData() {
            try {
                let data = await fetch('https://dummyapi.io/data/v1/post/60d21b4667d0d8992e610c85', {
                    headers: {
                        'app-id': '6260be9f96313cbf4b77fa38',
                        'method': "GET",

                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                if (data.ok) {
                    let response = await data.json()
                    //console.log('response', response);
                    sCount(response.id)
                    //console.log('data json 1', value['0'].body)
                    //console.log('data json 2', values.value.id)
                    //setCount(data.json().value[0].body)
                }
            } catch (error) {
                console.log('mistake here');
            }
        }

    }, []);
    return (
        <div className='post'>
            <p>{count}</p>
        </div>
    );
}