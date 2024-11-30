import React from "react";
import { useParams } from "react-router-dom";
import { Card, Text, Spinner } from "@shopify/polaris";
import useContest from "../hooks/useContest";

const ContestDetailPage = () => {
  const { id } = useParams(); // Get the contest ID from the URL params
  const { contest, isLoading } = useContest(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <Spinner size="large" />
      </div>
    );
  }

  if (!contest) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <Text>No contest found</Text>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="w-screen max-w-3xl p-6 space-y-6">
        <Card>
          <Text variant="heading2xl">{contest.name}</Text>
          <div className="space-y-3 mt-4">
            <Text>
              <strong>Type:</strong> {contest.type}
            </Text>
            <Text>
              <strong>Phase:</strong> {contest.phase}
            </Text>
            <Text>
              <strong>Start Time:</strong>{" "}
              {new Date(contest.startTimeSeconds * 1000).toLocaleString()}
            </Text>
            <Text>
              <strong>Duration:</strong> {contest.durationSeconds / 60} minutes
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContestDetailPage;
