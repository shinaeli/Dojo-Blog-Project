import { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController() //Initialise an abort controller
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) //Associating the 'AbortController' to the fetch inorder to stop the fetch
            .then(response => {
                console.log(response);
                if(!response.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return response.json();
            })
             .then(
                    data => {console.log(data);
                    setData(data);
                    setisPending(false);
                    setError(null);
                    })
                    .catch(error => {
                        if(error.name === 'AbortError') { //If the error is caused by the user
                            console.log('fetch aborted')
                        } else {
                            console.log(error.message);
                            setError(error.message);
                            setisPending(false);
                        }
                    })
        }, 1500) //'useEffect' can be used to check states

        return () => abortCont.abort() //The 'abort controller' returns a function that is fired once the component using the custom hook gets unmounted
    }, [url]) //The 'useEffect' only runs on the first default rendering
    
    return { data, isPending, error }; //the 'useFetch' custom hook returns any type of value
}

export default useFetch;
