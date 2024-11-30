import React from "react";
import { Link } from "react-router-dom";
import { Card, Text, Spinner } from "@shopify/polaris";

const ContestList = ({ contests, isLoading }) => {
  if (isLoading) {
    return <Spinner size="large" />;
  }

  return (
    <Card>
      <div className="h-[25rem] overflow-y-auto custom-scrollbar w-screen">
        {contests.map((contest) => (
          <div key={contest.id} className="py-2">
            <Link to={`/contest/${contest.id}`}>
              <Text variation="strong">{contest.name}</Text>
            </Link>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContestList;
