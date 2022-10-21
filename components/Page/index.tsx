import React, { ReactElement } from "react";

// components
import Topbar from "../Topbar";

interface IPageProps {
  children: ReactElement;
}

const Page = ({ children }: IPageProps) => {
  return (
    <main style={{ marginTop: "10vh" }}>
      <Topbar />
      {children}
    </main>
  );
};

export default Page;
