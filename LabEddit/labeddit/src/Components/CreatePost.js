import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { PostCardWrapper } from "./styled";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // const onChangeTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  // const onChangePostText = (e) => {
  //   setText(e.target.value);
  // };

  const CreatingPost = () => {
    props.handleCreatePost(text, title);

    setText("");
    setTitle("");
  };

  return (
    <PostCardWrapper>
      <Card variant="outlined">
        <CardContent>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Título do Post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />

          <div>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={6}
              fullWidth
              variant="outlined"
              style={{ marginTop: "19px" }}
              label="Escreva seu post"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "149px" }}
            onClick={CreatingPost}
          >
            Postar
          </Button>
        </CardActions>
      </Card>
    </PostCardWrapper>
  );
};
export default CreatePost;
