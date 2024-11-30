import React, { useState } from "react";
import { Page, Card, TextField, Select } from "@shopify/polaris";
import ContestList from "../components/ContestList";
import ContestGraph from "../components/ContestGraph.jsx";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Pagination";

const Home = () => {
  const [filters, setFilters] = useState({ type: "", search: "" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { contests, isLoading } = useFetch(filters, page, pageSize);

  const handleSearchChange = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleTypeChange = (value) => {
    setFilters((prev) => ({ ...prev, type: value }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(Number(value));
    setPage(1);
  };

  return (
    <div className="w-full px-2">
      <Page fullWidth>
        <Card>
          <TextField
            label="Search Contests"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by contest name"
          />
          <Select
            label="Filter by Type"
            options={["", "CF", "ICPC"].map((type) => ({
              label: type,
              value: type,
            }))}
            onChange={handleTypeChange}
            value={filters.type}
          />
        </Card>

        <div className="gap-6 mt-6 grid lg:grid-cols-2 grid-cols-1 w-full">
          <Card>
            <ContestGraph contests={contests} />
          </Card>
          <Card fullWidth>
            <ContestList contests={contests} isLoading={isLoading} />
            <Pagination
              currentPage={page}
              onPageChange={handlePageChange}
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
            />
          </Card>
        </div>
      </Page>
    </div>
  );
};

export default Home;
