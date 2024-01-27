import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AppEmitter, { EmitterAction } from "../../utils/AppEmitter";

const CreateArticleModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    // Handle the creation of the article here
    console.log("Creating article with title: ", title, " and body: ", body);
    setOpen(false);
  };

  useEffect(() => {
    AppEmitter.instance.subscribe(
      EmitterAction.SHOW_CREATE_ARTICLE_MODAL,
      handleClickOpen
    );
    return () => {
      AppEmitter.instance.unsubscribe(
        EmitterAction.SHOW_CREATE_ARTICLE_MODAL,
        handleClickOpen
      );
    };
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Article</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create an article, please enter the title and body here.
        </DialogContentText>
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
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateArticleModal;
