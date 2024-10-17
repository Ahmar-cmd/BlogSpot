import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container } from "../components";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <Container>
      <div className="flex flex-col md:flex-row md:items-start my-auto mx-auto px-4 py-8">
        <div className="w-full md:w-1/2 md:mr-8 mb-8 md:mb-0">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </div>
      {isAuthor && (
        <div className="flex justify-center gap-4 mt-4 mb-2">
          <Link to={`/edit-post/${post.$id}`}>
            <Button
              bgColor="bg-blue-500"
              className="sm:w-40 w-24 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Edit
            </Button>
          </Link>
          <Button
            bgColor="bg-red-500"
            className="sm:w-40 w-24 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            onClick={deletePost}
          >
            Delete
          </Button>
        </div>
      )}
    </Container>
  ) : null;
}