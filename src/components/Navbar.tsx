import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
  } from "@mui/material";
  import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MegaMenu from "./MegaMenu";
import logo from "../assets/logo.svg";
const actionItems = [
  { icon: <SearchIcon /> },
  { icon: <PhoneIcon /> },
  { icon: <LanguageIcon /> },
];
const actionItems2 = [
  { icon: <ChatBubbleOutlineIcon sx={{ color: "#f6603e" }} /> },
  { icon: <PersonOutlineIcon sx={{ color: "#f6603e" }} /> },
];

const navItems = [
  {
    label: "Partner",
    submenu: ["Become a Partner", "Partner Portal"],
  },
  {
    label: "Company",
    submenu: ["About Us", "Leadership", "Careers"],
  },
  {
    label: "Managed Services",
    submenu: ["IT Ops", "Security", "Infrastructure"],
  },
  {
    label: "Industries",
    submenu: ["Retail", "Finance", "Logistics"],
  },
  {
    label: "Careers",
    submenu: ["Open Roles", "Life at IIGS"],
  },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDrawerIndex, setOpenDrawerIndex] = useState<number | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);
  const [capMenuAnchor, setCapMenuAnchor] = useState<HTMLElement | null>(null);

  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleDesktopMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleDesktopMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  const handleCapOpen = (e: React.MouseEvent<HTMLElement>) => {
    setCapMenuAnchor(e.currentTarget);
  };

  const handleCapToggle = (e: React.MouseEvent<HTMLElement>) => {
    setCapMenuAnchor((prev) => (prev ? null : e.currentTarget));
  };

  const handleCapClose = () => {
    setCapMenuAnchor(null);
  };

  return (
    <>
      {/* Top bar */}
      <AppBar
        position="sticky"
        sx={{ bgcolor: "black", top: 0, zIndex: 1, width: "100vw" }}
      >
        <AppBar position="static" sx={{ bgcolor: "#2a4b94", py: 0.5 }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "36px !important",
            }}
          >
            <Box display="flex" gap={1}>
              {actionItems.map((item, index) => (
                <IconButton key={index} color="inherit" size="small">
                  {item.icon}
                </IconButton>
              ))}
            </Box>
            <Box display="flex" gap={1}>
              {actionItems2.map((item, index) => (
                <IconButton key={index} color="inherit" size="small">
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        {/* Main Nav */}
        <AppBar position="static" sx={{ bgcolor: "#66000000" ,  }}>
          <Container sx={{
              maxWidth:"1800px !important",
          }}>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center" gap={1}>
  <img src={logo} alt="logo" style={{ height: 32 }} />
  <Typography sx={{ color: "white", fontSize: 12, fontWeight: 600 }}>
   
  </Typography>
</Box>

{/* Desktop Navigation Buttons with MegaMenu */}
<Box
  display={{  md: "flex" }} 
  gap={2}
  sx={{ position: "relative" }}
>
<Box
  display={{ xs: "none", md: "flex" }} 
  gap={2}
  sx={{ position: "relative" }}
>

  {navItems.map((item, index) => (
    <Box key={item.label}>
      <Button
        onClick={(e) => {
          setCapMenuAnchor(e.currentTarget);
          setOpenMenuIndex(openMenuIndex === index ? null : index);
        }}
        sx={{
          color: "white",
          fontWeight: 500,
          textTransform: "none",
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        {item.label}
      </Button>

      {/* Show MegaMenu only for the active index */}
      {openMenuIndex === index && (
        <MegaMenu
          anchorEl={capMenuAnchor}
          open={Boolean(capMenuAnchor)}
          onClose={() => {
            setCapMenuAnchor(null);
            setOpenMenuIndex(null);
          }}
        />
      )}
    </Box>
  ))}
</Box>
  {/* Mobile Hamburger */}
  <IconButton
  edge="end"
  color="inherit"
  onClick={() => setMobileDrawerOpen(true)} 
  sx={{ display: { md: "none" } }}
>
  <MenuIcon />
</IconButton>

</Box>

            </Toolbar>
          </Container>
        </AppBar>
     
      
      </AppBar>

      <Drawer
  anchor="left"
  open={mobileDrawerOpen}
  
  onClose={() => setMobileDrawerOpen(false)}
  PaperProps={{
    sx: { width: 250, backgroundColor: "#121212", color: "white" },
  }}
>
  <Box role="presentation" onClick={() => setMobileDrawerOpen(false)} sx={{ p: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Menu
    </Typography>
    <Divider sx={{ borderColor: "#444" }} />
    <List>
  {navItems.map((item, index) => (
    <Box key={item.label}>
      <ListItem
        
        onClick={() =>
          setOpenDrawerIndex(openDrawerIndex === index ? null : index)
        }
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary={item.label} />
        {openDrawerIndex === index ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {openDrawerIndex === index && (
        <List sx={{ pl: 3 }}>
          {item.submenu.map((sub, subIndex) => (
            <ListItem  key={subIndex}>
              <ListItemText primary={sub} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  ))}
</List>

  </Box>
</Drawer>

    </>
  );
};

export default Navbar;
