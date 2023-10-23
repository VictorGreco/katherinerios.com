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

import styles from '../styles/AppDrawer.module.css';

const drawerWidth = 240;
const navItems = [
    // {
    //   "name": "landing_page.introduction.menu.blog",
    //   "link": "/blog"
    // },
    {
      "name": "landing_page.introduction.menu.ebooks",
      "link": "#ebooks"
    },
    {
      "name": "landing_page.introduction.menu.newsletter",
      "link": "#newsletter"
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
      "name": "landing_page.introduction.menu.strategy",
      "link": "#strategy"
    },
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
        width={75}
        height={75}
        loading="lazy"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href={item.link}>
                <ListItemText primary={t(item.name)} className={styles.texts} />
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
      <Box sx={{ display: 'flex' }} className='desktop-nav'>
        <AppBar component="nav" position='fixed' sx={{ backgroundColor: '#FFF', color: '#2D2E51' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none', xs: 'flex' }, width: { xs: '100%' }, justifyContent: { xs: 'space-between' } }}
            >
              <MenuIcon />

              <Image 
                src="/statics/logo_alternate_extended.svg"
                alt="A descriptive image alt text"
                width={100}
                height={50}
                loading="lazy"
              />

              <div></div>
            </IconButton>
            <Box sx={{ display: { xs: 'none', lg: 'flex', justifyContent: 'space-around', width: '100%' } }} className='mobile-nav'>
              <Image 
                src="/statics/logo_alternate_extended.svg"
                alt="A descriptive image alt text"
                width={200}
                height={100}
                loading="lazy"
              />
              <div className={styles.TopMenuRightSide}>
                <a href='/'>
                  <Image 
                    src="/statics/exp_logo.png"
                    alt="A descriptive image alt text"
                    width={75}
                    height={35}
                    loading="lazy"
                  />
                </a>

                {navItems.map((item) => (
                  <a href={item.link} key={item.link} >
                    <Button key={item.name} sx={{ color: '#2D2E51' }}>
                        {t(item.name)}
                      </Button>
                  </a>
      
                ))}
              </div>
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