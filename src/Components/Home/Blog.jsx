import React from 'react';

const Blog = () => {
  const blogs = [
    {
      title: "Here are the trends I see coming this fall",
      date: "Dec 01, 2017",
      imageUrl: "images/blog_1.jpg",
      link: "#"
    },
    {
      title: "Here are the trends I see coming this fall",
      date: "Dec 01, 2017",
      imageUrl: "images/blog_2.jpg",
      link: "#"
    },
    {
      title: "Here are the trends I see coming this fall",
      date: "Dec 01, 2017",
      imageUrl: "images/blog_3.jpg",
      link: "#"
    }
  ];

  return (
    <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title">
              <h2>Latest Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row blogs_container">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 blog_item_col" key={index}>
              <div className="blog_item">
                <div 
                  className="blog_background" 
                  style={{ backgroundImage: `url(${blog.imageUrl})` }}>
                </div>
                <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="blog_title">{blog.title}</h4>
                  <span className="blog_meta">by admin | {blog.date}</span>
                  <a className="blog_more" href={blog.link}>Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
