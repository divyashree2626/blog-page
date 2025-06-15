import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: 'Getting Started with React',
    date: 'June 10, 2025',
    content: 'Today I learned about React components and how to manage state. It’s amazing to build dynamic UIs!'
  },
  {
    title: 'Building My First Project',
    date: 'June 5, 2025',
    content: 'I built a tic-tac-toe game using HTML, CSS, and JS. Next, I want to try building it in React!'
  },
  {
    title: 'Why I Love Coding',
    date: 'May 30, 2025',
    content: 'Coding helps me express creativity and logic. It’s like solving puzzles every day.'
  },
];

function BlogList() {
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}

export default BlogList;
