import { useState, useEffect } from "react";

const useFetch = (filters, page, pageSize) => {
  const [contests, setContests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://codeforces.com/api/contest.list?gym=false`
      );
      const data = await response.json();
      let filteredContests = data.result;

      // search filter
      if (filters.search) {
        filteredContests = filteredContests.filter((contest) =>
          contest.name.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      // type filter
      if (filters.type) {
        filteredContests = filteredContests.filter(
          (contest) => contest.type === filters.type
        );
      }

      // pagination logic: Slice based on the current page and page size
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedContests = filteredContests.slice(startIndex, endIndex);

      setContests(paginatedContests);
      setIsLoading(false);
    };

    fetchContests();
  }, [filters, page, pageSize]);

  return { contests, isLoading };
};

export default useFetch;
