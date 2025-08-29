"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Skeleton } from "@mui/material";

export function StatsCard({
  title,
  value,
  icon,
  loading = false,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={80} height={36} />
            ) : (
              <Typography variant="h4" component="div">
                {value}
              </Typography>
            )}
          </Box>
          {icon ? <Box color="primary.main">{icon}</Box> : null}
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
