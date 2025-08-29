"use client";

import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import StatsCard from "@/components/dashboard/StatsCard";
import { People, PersonOutline, ShoppingCart } from "@mui/icons-material";
import { SWRProvider } from "@/components/providers";
import { useUsers } from "@/hooks";
import SearchInput from "@/components/table/SearchInput";
import DataTable, { type Column } from "@/components/table/DataTable";
import { type User } from "@/types";

function DashboardContent() {
  const { users, isLoading } = useUsers();
  const totalUsers = users.length || 0;
  const activeUsers = Math.round(totalUsers * 0.6);
  const totalOrders = totalUsers * 3;

  const [query, setQuery] = React.useState("");
  const [orderBy, setOrderBy] = React.useState<string>("name");
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = users;
    if (q) {
      data = users.filter(u =>
        [u.name, u.email, u.phone, u.company?.name].some(v =>
          String(v ?? "")
            .toLowerCase()
            .includes(q)
        )
      );
    }
    data = [...data].sort((a: User, b: User) => {
      const av = String((a as any)[orderBy] ?? "").toLowerCase();
      const bv = String((b as any)[orderBy] ?? "").toLowerCase();
      if (av < bv) return order === "asc" ? -1 : 1;
      if (av > bv) return order === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [users, query, orderBy, order]);

  const paged = React.useMemo(() => {
    const start = page * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  const columns: Column<User>[] = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "phone", label: "Phone" },
    {
      key: "company",
      label: "Company",
      sortable: true,
      render: u => u.company?.name,
    },
  ];

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Total Users"
            value={totalUsers}
            loading={isLoading}
            icon={<People fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Active Users"
            value={activeUsers}
            loading={isLoading}
            icon={<PersonOutline fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            title="Total Orders"
            value={totalOrders}
            loading={isLoading}
            icon={<ShoppingCart fontSize="large" />}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <Box mb={2}>
          <SearchInput placeholder="Search users..." onSearch={setQuery} />
        </Box>
        <DataTable<User>
          columns={columns}
          rows={paged}
          total={filtered.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={setPage}
          onRowsPerPageChange={size => {
            setRowsPerPage(size);
            setPage(0);
          }}
          orderBy={orderBy}
          order={order}
          onSort={key => {
            if (orderBy === key) {
              setOrder(prev => (prev === "asc" ? "desc" : "asc"));
            } else {
              setOrder("asc");
              setOrderBy(key);
            }
          }}
          emptyMessage={isLoading ? "Loading users..." : "No users found"}
        />
      </Box>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <SWRProvider>
      <DashboardContent />
    </SWRProvider>
  );
}
