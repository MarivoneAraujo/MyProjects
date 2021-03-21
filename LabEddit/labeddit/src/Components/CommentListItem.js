import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { ContainerCommentListItem } from "./styled";

const CommentListItem = (props) => {
  const handleUpVote = () => {
    if (props.comment.userVoteDirection === 1) {
      props.sendCommentVote(props.comment.id, 0);
    } else {
      props.sendCommentVote(props.comment.id, 1);
    }
  };

  const handleDownVote = () => {
    if (props.comment.userVoteDirection === -1) {
      props.sendCommentVote(props.comment.id, 0);
    } else {
      props.sendCommentVote(props.comment.id, -1);
    }
  };

  return (
    <ContainerCommentListItem>
      <ListItem>
        <ListItemText
          primary={props.comment.username}
          secondary={props.comment.text}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={handleUpVote}>
            <ArrowUpwardIcon
              color={
                props.comment.userVoteDirection === 1 ? "primary" : "disabled"
              }
            />
          </IconButton>
          <IconButton style={{ color: "black", fontSize: "18px" }}>
            <span>{props.comment.votesCount}</span>
          </IconButton>
          <IconButton edge="end" onClick={handleDownVote}>
            <ArrowDownwardIcon
              color={
                props.comment.userVoteDirection === -1
                  ? "secondary"
                  : "disabled"
              }
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </ContainerCommentListItem>
  );
};

export default CommentListItem;
