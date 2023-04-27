import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ProfileIcon from "@mui/icons-material/AccountCircle";

import LogoutForm from './LogoutForm';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="text" onClick={handleClick} color='warning'>
      <ProfileIcon/>
        <p className="m-0 ps-1 text-dark">Mariah Gift</p>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
       <LogoutForm/>
  
      </Popover>
    </>
  );
}