import BlogList from './BlogList'
import useFetch from './useFetch'
const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ])

    //  const [name, setName] = useState('ayo')

    //   const handleDelete = id => {
    //       const newBlogs = blogs.filter(blog => blog.id !== id);
    //       setBlogs(newBlogs);
    //   }

    //   The 'useEffect' hook runs a function in every render of a page
    // const display = () => console.log('useEffect ran')
    // useEffect(() => {
    //     console.log('useEffect ran')
    // })
    
    // useEffect(() => {
    //     console.log('useEffect ran')
    //     console.log(blogs)
    //     console.log(name)
    // }, [name]) //The 'useEffect' when there is a change in the dependent state
    // useEffect(display)

    // const handleClick = (e) => {
    //     console.log('Hello World!', e)
    //     setName('Demola')
    //     setAge(28)
    //     setSex('Male')
    // }

    // const handleClickAgain = (name, e) => console.log('Hello '+name+'!', e.target);

    // const [name, setName] = useState('Victoria')
    // const [age, setAge] = useState(23)
    // const [sex, setSex] = useState('Female')
    return (
        <div className='home'>
            <p>{error}</p>
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title='All Blogs!' />}
            {/* {blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>} */}
            {/* <button onClick={() => setName('wale')}>change name</button> */}
            {/* <p>{name}</p> */}
            
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs!" handleDelete={handleDelete}/> */}
            {/* <p>{name} is {age} years old. A {sex}.</p> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e)=>handleClickAgain('Frida', e)}>Click Me Again!</button> */}
        </div>
    )
}

export default Home
