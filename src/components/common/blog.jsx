import blog from "../../images/blog.png";


const Blog = () => {
  return (
    <article>
     <a href="https://nextjs-blog-project-master.vercel.app/" target="_blank" rel="noreferrer">
        <img src={blog} alt="Project Cover" />
        <div className="article__content">
          <h1>Software Development Blog</h1>
          <p>
            React + Nextjs - Implemented Nextjs' Image and Head components, routing and pre-rendering options. 
          </p>
        </div>
      </a>
    </article>
  );
};

export default Blog;
