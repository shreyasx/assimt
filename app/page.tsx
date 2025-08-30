'use client'
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Stack gap={2} alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h4">hi</Typography>
      <Stack direction="row" gap={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button component={Link} href="/agents" variant="contained">Go to Agents</Button>
      </Stack>
    </Stack>
  );
}