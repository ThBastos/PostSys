import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";

export default function AdminOne() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((json) => {
        const firstPost = json.slice(99);
        setPost(firstPost);
      });
  }, []);

  return (
    <>
      <AdminHeader />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <Link
              to="/admin/posts"
              className="mb-6 text-sm font-semibold leading-6 text-slate-600"
            >
              <span aria-hidden="true">&larr;</span> Voltar
            </Link>
          </div>
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post[0]?.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {post[0]?.content}
            </p>
          </div>
          <div className="mt-8 mx-auto lg:mx-0 lg:justify-end">
            <h1 className="text-2xl mb-2">Adicionar comentário:</h1>
            <textarea className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <button
              type="submit"
              className=" mt-6 block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
