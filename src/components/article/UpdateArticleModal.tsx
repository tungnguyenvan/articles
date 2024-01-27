import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AppEmitter, { EmitterAction } from "../../utils/AppEmitter";
import { useArticleDetail } from "../../hooks/ArticleHooks";

const UpdateArticleModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [editArticleId, setEditArticleId] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  // TODO: Handle this
  const { loading } = useArticleDetail({ id: editArticleId });

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleEdit = () => {
    // Handle the editing of the article here
    console.log("Editing article with title: ", title, " and body: ", body);
    handleClose();
  };

  const handleEventEmitter = useCallback(
    (id?: string | number) => {
      if (!id || typeof id !== "number") {
        console.error("Invalid article id");
        return;
      }

      setEditArticleId(id);
      setOpen(true);
    },
    [setEditArticleId, setOpen]
  );

  useEffect(() => {
    AppEmitter.instance.subscribe(
      EmitterAction.SHOW_EDIT_ARTICLE_MODAL,
      handleEventEmitter
    );
    return () => {
      AppEmitter.instance.unsubscribe(
        EmitterAction.SHOW_EDIT_ARTICLE_MODAL,
        handleEventEmitter
      );
    };
  }, [handleEventEmitter]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Article</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To edit this article, please modify the title and body here.
        </DialogContentText>
        {/* Add loading here */}
        {loading && <CircularProgress />}
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Body"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateArticleModal;
