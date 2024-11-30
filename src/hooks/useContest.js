import { useState, useEffect } from "react";

const useContest = (id) => {
  const [contest, setContest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://codeforces.com/api/contest.list");
        const data = await response.json();

        // Find the contest with the matching ID
        const contestData = data.result.find(
          (contest) => contest.id === parseInt(id)
        );

        setContest(contestData);
      } catch (error) {
        console.error("Error fetching contest data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchContest();
    }
  }, [id]);

  return { contest, isLoading };
};

export default useContest;
