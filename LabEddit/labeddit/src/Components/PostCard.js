import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Button } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import { useHistory } from "react-router";
// import { goToDetailsPage } from "./coordinator";
import { ContainerPostCard } from "./styled";

const PostCard = (props) => {
  const history = useHistory();

  const handleGoToPostDetail = () => {
    history.push(`/post/${props.post.id}`);
    // goToDetailsPage(history)
  };

  const handleUpVote = () => {
    props.handlePostVote(props.post.id, 1);
  };

  const handleDownVote = () => {
    props.handlePostVote(props.post.id, -1);
  };

  return (
    <ContainerPostCard>
      <Card>
        <CardHeader title={props.post.title} subheader={props.post.username} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleUpVote}>
            <ArrowUpwardIcon
              color={
                props.post.userVoteDirection === 1 ? "primary" : "disabled"
              }
            />
          </IconButton>

          <span>{props.post.votesCount}</span>

          <IconButton onClick={handleDownVote}>
            <ArrowDownwardIcon
              color={
                props.post.userVoteDirection === -1 ? "secondary" : "disabled"
              }
            />
          </IconButton>

          {!props.hideComment && (
            <Button
              color="primary"
              startIcon={<CommentIcon />}
              onClick={handleGoToPostDetail}
            >
              Comentar
            </Button>
          )}
        </CardActions>
      </Card>
    </ContainerPostCard>
  );
};

export default PostCard;
