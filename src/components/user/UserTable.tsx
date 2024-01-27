import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserModel } from "../../models/UserModel";
import AppEmitter, { EmitterAction } from "../../utils/AppEmitter";

interface UserTableProps {
  users: UserModel[];
}

interface UserTableRowProps {
  user: UserModel;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleUpdate = useCallback(() => {
    AppEmitter.instance.publish(EmitterAction.SHOW_EDIT_USER_MODAL, user.id);
    handleClose();
  }, [handleClose, user]);

  const handleDelete = useCallback(() => {
    // TODO: Show confirm dialog and execute delete user and then publish refresh event
    handleClose();
  }, [handleClose]);

  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.created_at.toLocaleString()}</TableCell>
      <TableCell>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleUpdate}>Update</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default UserTable;
