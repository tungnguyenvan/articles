import React, { useCallback, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { ArticleModel } from "../../models/ArticleModel";
import AppEmitter, { EmitterAction } from "../../utils/AppEmitter";

export interface ArticleCardProps {
  article: ArticleModel;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleEditClick = useCallback(() => {
    AppEmitter.instance.publish(
      EmitterAction.SHOW_EDIT_ARTICLE_MODAL,
      article.id
    );
    handleClose();
  }, [handleClose, article]);

  const handleDeleteClick = useCallback(() => {
    console.log("Delete clicked");
    handleClose();
  }, [handleClose]);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Card key={article.id}>
        <CardHeader
          title={article.title}
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {article.body}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created at: {article.created_at.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Updated at: {article.updated_at.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Favourite count: {article.favourite_count}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <IconButton aria-label="like">
              <ThumbUpAltIcon />
            </IconButton>
            <IconButton aria-label="dislike">
              <ThumbDownAltIcon />
            </IconButton>
          </Box>
        </CardContent>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleEditClick}>
            <ListItemIcon>
              <EditIcon color="primary" />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={handleDeleteClick}>
            <ListItemIcon>
              <DeleteIcon color="secondary" />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </Card>
    </Box>
  );
};

export default ArticleCard;
