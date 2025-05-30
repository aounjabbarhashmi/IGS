import React from "react";
import {
  Box,
  Typography,
  Paper,
  Popper,
  ClickAwayListener,
} from "@mui/material";

type MegaMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

const capabilitiesMenu = {
  services: [
    "Application services",
    "Artificial intelligence",
    "Automation",
    "Business strategy",
    "Cloud",
    "Customer experience",
    "Cybersecurity",
    "Finance",
    "HR and talent",
    "Marketing",
    "Supply chain",
    "Sustainability",
  ],
  experiences: [
    {
      title: "Consulting Advantage",
      description:
        "First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.",
    },
    {
      title: "Garage",
      description:
        "Collaborative engagement model for accelerating AI and digital transformation.",
    },
    {
      title: "X-Force",
      description:
        "Build a comprehensive, integrated security program to protect your organization from global threats.",
    },
  ],
};

const MegaMenu: React.FC<MegaMenuProps> = ({ anchorEl, open, onClose }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      style={{ zIndex: 1300 }}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ]}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            p: 3,
            width: 720,
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* Left Column */}
          <Box flex={1} pr={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Services
            </Typography>
            {capabilitiesMenu.services.map((service) => (
              <Typography
                key={service}
                variant="body2"
                sx={{ py: 0.5, cursor: "pointer", "&:hover": { color: "#2a4b94" } }}
              >
                {service}
              </Typography>
            ))}
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "#2a4b94", fontWeight: 500, cursor: "pointer" }}
            >
              See all services →
            </Typography>
          </Box>

          {/* Right Column */}
          <Box flex={1} borderLeft="1px solid #eee" pl={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Signature Experiences
            </Typography>
            {capabilitiesMenu.experiences.map((item) => (
              <Box key={item.title} mb={2}>
                <Typography variant="body2" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default MegaMenu;
