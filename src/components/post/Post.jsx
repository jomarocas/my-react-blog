import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ message }) {
  const img = message[0]
  const txt = message[1]
  const pid = message[2]
  const tags = message[3]
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">

        <div className="postTags">
          <span className="postTag">
            {tags.length ? (
              <>
                {tags.map((tag) => (
                  <Link className="link" to={{
                    pathname: `/posts?tag=${tag}`
                  }}>  {tag}
                  </Link>
                ))}
              </>
            ) : (
              'music'
            )}
          </span>
        </div>
        <span className="postTitle">
          <Link to={{
            pathname: `/post/${pid}`
          }} className="link">
            {txt}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {txt}
      </p>
    </div>
  );
}
