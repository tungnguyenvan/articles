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
import { useUserDetail } from "../../hooks/UserHooks";

const UpdateUserModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [updateUserId, setUpdateUserId] = useState<number>();

  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);

  // TODO: Handle this
  const { loading } = useUserDetail({ id: updateUserId });

  const handleEmitterEvent = useCallback(
    (id?: string | number) => {
      if (!id || typeof id !== "number") {
        console.error("Invalid user id");
        return;
      }

      setUpdateUserId(id);
      handleOpen();
    },
    [setUpdateUserId, handleOpen]
  );

  useEffect(() => {
    AppEmitter.instance.subscribe(
      EmitterAction.SHOW_EDIT_USER_MODAL,
      handleEmitterEvent
    );

    return () => {
      AppEmitter.instance.unsubscribe(
        EmitterAction.SHOW_EDIT_USER_MODAL,
        handleEmitterEvent
      );
    };
  }, [handleEmitterEvent]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Update User</DialogTitle>
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
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserModal;
