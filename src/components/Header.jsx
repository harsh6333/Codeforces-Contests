import React from "react";
import { Text, Card } from "@shopify/polaris";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-black p-3">
      <Text as="span" variant="heading2xl" fontWeight="bold">
        Codeforces Contests
      </Text>
    </header>
  );
};

export default Header;
