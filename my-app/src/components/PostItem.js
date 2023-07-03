import './PostItem.css'

const h1Styled = {
    backgroundColor: 'darkblue',
    color: 'white'
}

const PostItem = ({ post }) => {
    return (
        <div className="container">
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'lightblue', padding: '5px' }}>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
export default PostItem