import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((json) => {
        const firstPosts = json.slice(87);
        setPosts(firstPosts);
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1>Posts</h1>
          <hr />
          <ul role="list" className="divide-y divide-gray-100">
            {posts.map((post) => (
              <li
                key={post.email}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={post.image}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <Link
                      to="/admin/posts/one"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {post.updatedAt}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    <time dateTime={post.updatedAt}>{post.updatedAt}</time>
                  </p>
                  <p className="text-sm leading-6 text-gray-900">{post.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
