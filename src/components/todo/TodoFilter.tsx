import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { buttonStyle } from "./TodoContainer";
import { Button } from "../ui/button";
// import { useAppDispatch } from "@/redux/hookes";
// import { filterByPriority } from "@/redux/features/todoSlice";

const TodoFilter = () => {
  // const dispatch = useAppDispatch();
  const [position, setPosition] = useState("high");
  // useEffect(() => {
  //   dispatch(filterByPriority(position));
  // }, [position]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={buttonStyle}>Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Mediul</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
