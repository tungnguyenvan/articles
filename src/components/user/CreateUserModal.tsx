import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import AppEmitter, { EmitterAction } from "../../utils/AppEmitter";

const CreateUserModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleOpenModal = useCallback(() => setOpen(true), [setOpen]);

  useEffect(() => {
    AppEmitter.instance.subscribe(
      EmitterAction.SHOW_CREATE_USER_MODAL,
      handleOpenModal
    );
    return () => {
      AppEmitter.instance.unsubscribe(
        EmitterAction.SHOW_CREATE_USER_MODAL,
        handleOpenModal
      );
    };
  }, [handleOpenModal]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateUserModal;
