"use client";

import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { PageHeader, PageContainer, SectionCard } from "@/components/ui";
import { ThemeToggle } from "@/components/ui";
import { useThemeContext } from "@/components/providers";

export default function SettingsPage() {
  const { mode, setMode } = useThemeContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <PageContainer>
      <PageHeader title="Settings" subtitle="Personalize your experience" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SectionCard title="Appearance">
            <Box display="flex" alignItems="center" gap={2}>
              <FormControl fullWidth>
                <InputLabel id="theme-mode-label">Theme Mode</InputLabel>
                <Select
                  labelId="theme-mode-label"
                  label="Theme Mode"
                  value={mode}
                  onChange={e =>
                    setMode(e.target.value as "light" | "dark" | "system")
                  }
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                  <MenuItem value="system">System</MenuItem>
                </Select>
              </FormControl>
              <ThemeToggle />
            </Box>
          </SectionCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <SectionCard title="Profile (placeholder)">
            <Box component="form" onSubmit={e => e.preventDefault()}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </SectionCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
