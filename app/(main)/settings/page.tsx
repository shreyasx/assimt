"use client";

import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { ThemeToggle } from "@/components/ui";
import { useThemeContext } from "@/components/providers";

export default function SettingsPage() {
  const { mode, setMode } = useThemeContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Appearance
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <FormControl fullWidth>
                  <InputLabel id="theme-mode-label">Theme Mode</InputLabel>
                  <Select
                    labelId="theme-mode-label"
                    label="Theme Mode"
                    value={mode}
                    onChange={e => setMode(e.target.value as any)}
                  >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="system">System</MenuItem>
                  </Select>
                </FormControl>
                <ThemeToggle />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile (placeholder)
              </Typography>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
