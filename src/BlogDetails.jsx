import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
    const {id} = useParams(), history = useHistory()

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs/' +id)

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' +data.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/')
        })
    }
    return (
        <div className='blog-details'>
            {isPending && <div>{isPending}</div>}
            {error && <div>{error}</div>}
            {data && <div>
                        <h2>{data.title}</h2>
                        <p>Written by {data.author}</p>
                        <div>{data.body}</div>
                        <button onClick={handleDelete}>delete</button>
                    </div>}
        </div>
    )
}

export default BlogDetails
