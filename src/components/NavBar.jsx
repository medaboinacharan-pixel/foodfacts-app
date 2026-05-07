import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Button, Badge } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function NavBar() {
  const savedCount = useSelector((state) => state.saved.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/saved">
          Saved <Badge badgeContent={savedCount} color="secondary"><BookmarkIcon /></Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
