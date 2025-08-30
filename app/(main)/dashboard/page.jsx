"use client";

import React from "react";
import { Box } from "@mui/material";
import { PageHeader, PageContainer, SectionCard } from "@/components/ui";
import StatsCard from "@/components/dashboard/StatsCard";
import { People, PersonOutline, ShoppingCart } from "@mui/icons-material";
import { SWRProvider } from "@/components/providers";
import { useUsers } from "@/hooks";
import SearchInput from "@/components/table/SearchInput";
import DataTable from "@/components/table/DataTable";
import Grid from "@mui/material/Grid";

function DashboardContent() {
  const { users, isLoading } = useUsers();
  const totalUsers = users.length || 0;
  const activeUsers = Math.round(totalUsers * 0.6);
  const totalOrders = totalUsers * 3;

  const [query, setQuery] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("name");
  const [order, setOrder] = React.useState("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

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
    data = [...data].sort((a, b) => {
      const aValue = (a || {})[orderBy];
      const bValue = (b || {})[orderBy];
      const av = String(aValue ?? "").toLowerCase();
      const bv = String(bValue ?? "").toLowerCase();
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

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
  ];

  return (
    <PageContainer>
      <PageHeader title="Dashboard" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <StatsCard
            title="Total Users"
            value={totalUsers}
            loading={isLoading}
            icon={<People fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            title="Active Users"
            value={activeUsers}
            loading={isLoading}
            icon={<PersonOutline fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            title="Total Orders"
            value={totalOrders}
            loading={isLoading}
            icon={<ShoppingCart fontSize="large" />}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <SectionCard title="Users">
          <Box mb={2}>
            <SearchInput placeholder="Search users..." onSearch={setQuery} />
          </Box>
          <DataTable
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
        </SectionCard>
      </Box>
    </PageContainer>
  );
}

export default function DashboardPage() {
  return (
    <SWRProvider>
      <DashboardContent />
    </SWRProvider>
  );
}
