// PostList.js

import React, { useEffect, useState } from 'react';
import { USERS_API } from "../../constant.js";
import PieChart from "../PieChart.js";
import './Data.css'; // Import your CSS file for styling
import Shimmer from "../Shimmer.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USERS_API);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter posts with user ID 1
  const filteredPosts = posts.filter((post) => post.userId === 1);

  return !posts.length ? (<Shimmer/>) : (
    <div className="post-list-container">
      <h2>Posts</h2>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pie Chart */}
      <div className="pie-chart-container">
        <h2>Pie Chart</h2>
        <PieChart data={[filteredPosts.length, posts.length-filteredPosts.length]} />
      </div>
    </div>
  );
};

export default PostList;
