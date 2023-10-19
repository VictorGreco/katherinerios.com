import * as React from 'react';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
    {
      "name": "landing_page.introduction.menu.strategy",
      "link": "#strategy"
    },
    {
      "name": "landing_page.introduction.menu.ebooks",
      "link": "#ebooks"
    },
    {
      "name": "landing_page.introduction.menu.blog",
      "link": "#blog"
    },
    {
      "name": "landing_page.introduction.menu.aboutme",
      "link": "#aboutme"
    },
    {
      "name": "landing_page.introduction.menu.experiance",
      "link": "#experiance"
    },
    {
      "name": "landing_page.introduction.menu.newsletter",
      "link": "#newsletter"
    }
  ];

export default function DrawerAppBar({ t, window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Image 
        src="/statics/logo_alternate.svg"
        alt="A descriptive image alt text"
        width={50}
        height={50}
        loading="lazy"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href={item.link}>
                <ListItemText primary={t(item.name)} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <section>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" position='fixed' sx={{ backgroundColor: '#2D2E51' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', lg: 'flex', justifyContent: 'center', width: '100%' } }}>
              {navItems.map((item) => (
                <a href={item.link}>
                  <Button key={item.name} sx={{ color: '#fff', marginRight: '40px' }}>
                      {t(item.name)}
                    </Button>
                </a>
     
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', mr: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </section>
  );
}