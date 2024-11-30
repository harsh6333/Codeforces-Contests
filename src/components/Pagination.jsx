import React from "react";
import { ButtonGroup, Button, Select, Layout } from "@shopify/polaris";

const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  onPageSizeChange,
}) => {
  // Options for how many items to show per page
  const pageSizeOptions = [
    { label: "10", value: 10 },
    { label: "15", value: 15 },
    { label: "20", value: 20 },
    { label: "25", value: 25 },
  ];

  return (
    <Layout.Section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonGroup>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            size="slim"
          >
            Previous
          </Button>
          <Button onClick={() => onPageChange(currentPage + 1)} size="slim">
            Next
          </Button>
        </ButtonGroup>

        <Select
          label="Items per page"
          options={pageSizeOptions}
          value={pageSize}
          onChange={onPageSizeChange}
          size="slim"
        />
      </div>
    </Layout.Section>
  );
};

export default Pagination;
