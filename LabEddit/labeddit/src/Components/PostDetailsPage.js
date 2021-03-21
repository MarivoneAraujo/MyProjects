import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { useHistory, useParams } from "react-router";
import { BASE_URL } from "../constants";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import CommentListItem from "./CommentListItem";
import {
  CommentGrid,
  ContainerSendComment,
  Textarea,
  ContainerButton,
} from "./styled";

const PostDetailsPage = (props) => {
  const params = useParams();
  // console.log(params)
  const history = useHistory();
  const [postDetails, setPostDetails] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    } else if (!params.postId) {
      history.push("/feed");
    }
  });

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const fetchPostDetails = () => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios.get(`${BASE_URL}/posts/${params.postId}`, header).then((response) => {
      setPostDetails(response.data.post);
    });
  };

  const handlReaderComment = (e) => {
    setNewComment(e.target.value);
  };

  const sendReaderComment = async () => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      text: newComment,
    };

    try {
      await axios.post(
        `${BASE_URL}/posts/${params.postId}/comment`,
        body,
        header
      );
      setNewComment("");
      fetchPostDetails();
    } catch (error) {
      alert("Não foi possível comentar. Tente novamente.");
      console.log(error);
    }
  };
  const sendCommentVote = async (commentId, direction) => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };
    try {
      await axios.put(
        `${BASE_URL}/posts/${params.postId}/comment/${commentId}/vote`,
        body,
        header
      );
      fetchPostDetails();
    } catch (error) {
      alert("Não foi possível votar no comentário. Tente novamente");
      console.log(error.message);
    }
  };

  return (
    <div>
      {postDetails !== null && <PostCard post={postDetails} hideComment />}

      <Textarea
        placeholder={"Faça um comentário!"}
        value={newComment}
        onChange={handlReaderComment}
      />
      <ContainerButton>
        <Button
          variant="contained"
          color="primary"
          onClick={sendReaderComment}
          // style={{ marginLeft: "34rem" }}
        >
          Enviar Comentário
        </Button>
      </ContainerButton>

      <List>
        <CommentGrid>
          {postDetails &&
            postDetails.comments.map((comment) => {
              return (
                <CommentListItem
                  comment={comment}
                  sendCommentVote={sendCommentVote}
                />
              );
            })}
        </CommentGrid>
      </List>
    </div>
  );
};

export default PostDetailsPage;
