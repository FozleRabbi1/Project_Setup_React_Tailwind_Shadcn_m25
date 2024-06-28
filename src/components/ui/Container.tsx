import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return (
    <div className="bg-gray-200 w-full max-w-[1000px] mx-auto px-2 p-10">
      {children}
    </div>
  );
};

export default Container;
