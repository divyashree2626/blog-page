import React from 'react';

function BlogCard({ title, date, content }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </div>
  );
}

export default BlogCard;
