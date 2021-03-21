import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants";
import LinearProgress from "@material-ui/core/LinearProgress";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import { goToLogin } from "./coordinator";
import { Loading, ContainerFeed } from "./styled";

const FeedPage = (props) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      goToLogin(history);
    }
  }, []);

  const handleCreatePost = async (text, title) => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      text: text,
      title: title,
    };

    try {
      setIsLoading(true);
      await axios.post(`${BASE_URL}/posts`, body, header);
      fetchPosts();
    } catch (error) {
      alert("Não foi possível criar o post.");
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    setIsLoading(true);
    axios.get(`${BASE_URL}/posts`, header).then((response) => {
      console.log(response.data.posts);
      setPosts(response.data.posts);
      setIsLoading(false);
    });
  };

  const handlePostVote = async (postId, direction) => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };
    try {
      await axios.put(`${BASE_URL}/posts/${postId}/vote`, body, header);
      fetchPosts();
    } catch (error) {
      alert("Não foi possível votar no post. Tente novamente.");
      console.log(error.message);
    }
  };

  return (
    <div>
      <CreatePost handleCreatePost={handleCreatePost} />

      <Loading>{isLoading && <LinearProgress />}</Loading>
      <ContainerFeed>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              handlePostVote={handlePostVote}
            />
          );
        })}
      </ContainerFeed>
    </div>
  );
};

export default FeedPage;
