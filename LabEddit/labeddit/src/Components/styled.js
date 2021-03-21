import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

// Header
export const StyledToolBar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
// LoginPage
export const LogoContainer = styled.img`
  margin-top: 0.5rem;
  margin-bottom: -5rem;
  width: 25rem;
`;

// SignupPage
export const LogoContainerSignup = styled.img`
  margin-top: 0.5rem;
  margin-bottom: -5rem;
  width: 25rem;
`;

// FeedPage
export const Loading = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ContainerFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-left: 10px;

  @media (min-width: 500px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 499px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`;

// CreatePost
export const PostCardWrapper = styled.div`
  margin-top: 5vh;
  margin-left: 32vw;
  width: 25rem;
  padding-left: 30px;
  background-color: white;
  color: black;

  @media (min-width: 500px) and (max-width: 800px) {
    margin-left: 22vw;
  }
  @media (max-width: 499px) {
    margin-left: 0.1vw;
    padding-left: 1.5vw;
  } ;
`;

// PostCard
export const ContainerPostCard = styled.div`
  width: 25rem;
  margin: 5px;

  @media (min-width: 500px) and (max-width: 800px) {
    width: 22rem;
    margin-left: 10px;
  }
  @media (max-width: 499px) {
    width: 22rem;
    margin-left: 25px;
  } ;
`;

// PostDetailsPage
export const CommentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-left: 10rem;

  @media (min-width: 500px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-left: 12.8rem;
  }
  @media (max-width: 499px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-left: 4rem;
  } ;
`;

export const ContainerSendComment = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-left: 10rem;
`;
export const Textarea = styled.textarea`
  margin-top: 2rem;
  width: 25rem;
  height: 13rem;
  padding-left: 30px;
  padding-top: 30px;
  margin-left: 30rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0.5px 2px gray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (min-width: 500px) and (max-width: 800px) {
    height: 10rem;
    width: 20rem;
    margin-left: 12rem;
  }
  @media (max-width: 499px) {
    height: 10rem;
    width: 20rem;
    margin-left: 1.5rem;
  } ;
`;

export const ContainerButton = styled.div`
  margin-left: 38rem;
  margin-bottom: 20px;

  @media (min-width: 500px) and (max-width: 800px) {
    margin-left: 17rem;
  }
  @media (max-width: 499px) {
    margin-left: 6.5rem;
  } ;
`;

// CommentListItem
export const ContainerCommentListItem = styled.div`
  width: 25rem;
  height: 7rem;
  margin: 25px;
  padding-left: 30px;
  background-color: white;
  color: black;
  left: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0.5px 3px gray;

  @media (min-width: 500px) and (max-width: 800px) {
    width: 16rem;
    margin: 15px;
  }
  @media (max-width: 499px) {
    width: 13rem;
    margin: 15px;
  } ;
`;
