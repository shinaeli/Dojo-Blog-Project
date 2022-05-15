import { useState } from "react"
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        
        // const blog = {title:title, body:body, author:author}
        //OR
        const blog = {title, body, author}
        console.log(blog);

        setIsPending(true); //Displays 'Adding Blog...' button while submitting to the server

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('blog added');
            setIsPending(false)
            // history.go(-1) //This takes me back to the previous page once the form is submitted
            history.push('/') //This takes me directly to the home page
        })
    }
    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    )
}

export default Create
