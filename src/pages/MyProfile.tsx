import { Container, List, Paper } from "@mui/material";
import React from "react";
import { useMyArticles } from "../hooks/ArticleHooks";
import ArticleCard from "../components/article/ArticleCard";
import { useUserInfo } from "../hooks/UserHooks";
import UserCard from "../components/user/UserCard";

const MOCK_ARTICLES = [
  {
    id: 1,
    title: "Article 1",
    body: "Body 1",
    created_at: new Date(),
    updated_at: new Date(),
    favourite_count: 1,
  },
  {
    id: 2,
    title: "Article 2",
    body: "Body 2",
    created_at: new Date(),
    updated_at: new Date(),
    favourite_count: 2,
  },
  {
    id: 3,
    title: "Article 3",
    body: "Body 3",
    created_at: new Date(),
    updated_at: new Date(),
    favourite_count: 3,
  },
];

const MOCK_USER = {
  id: 1,
  username: "user1",
  email: "user1@example.com",
  created_at: new Date(),
  updated_at: new Date(),
  fullname: "User 1",
};

const MyProfile: React.FC = () => {
  const { data: articles } = useMyArticles();
  const { data: userInfo } = useUserInfo();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth="xs">
      <Paper>
        <UserCard user={userInfo ?? MOCK_USER} />
      </Paper>
      </Container>

      <h2>My Articles</h2>
      <List>
        {(articles ?? MOCK_ARTICLES)?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </List>
    </Container>
  );
};

export default MyProfile;
