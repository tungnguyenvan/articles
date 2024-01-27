import { Box, Container, Fab, List } from "@mui/material";
import React, { useCallback } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArticleCard from "../components/article/ArticleCard";
import CreateArticleModal from "../components/article/CreateArticleModal";
import AppEmitter, { EmitterAction } from "../utils/AppEmitter";
import UpdateArticleModal from "../components/article/UpdateArticleModal";

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

const NewsFeedPage: React.FC = () => {
  const onFloatButtonClick = useCallback(() => {
    AppEmitter.instance.publish(EmitterAction.SHOW_CREATE_ARTICLE_MODAL);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <List>
        {MOCK_ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </List>

      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab color="primary" aria-label="add" onClick={onFloatButtonClick}>
          <AddIcon />
        </Fab>
      </Box>

      <CreateArticleModal />
      <UpdateArticleModal />
    </Container>
  );
};

export default NewsFeedPage;
