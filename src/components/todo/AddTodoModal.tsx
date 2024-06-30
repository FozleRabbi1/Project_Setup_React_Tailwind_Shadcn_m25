import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { buttonStyle } from "./TodoContainer";
import { FormEvent, useState } from "react";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { useAppDispatch } from "@/redux/hookes";
// import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [priority, setPriority] = useState("high");
  const [task, setTask] = useState("");
  const [description, setdescription] = useState("");
  // const dispatch = useAppDispatch();
  const [addTodo, { data, isError, isLoading }] = useAddTodoMutation();

  const onSubmitData = (e: FormEvent) => {
    e.preventDefault();
    // const id = Math.random().toString(36).substring(2);
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    const taskDetails = {
      title: task,
      description,
      priority,
      isCompleted: false,
      dateTime: formattedDate,
    };
    addTodo(taskDetails);

    // dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonStyle}>Add Todo</Button>
      </DialogTrigger>
      <DialogContent onSubmit={onSubmitData} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add todo</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              placeholder="Task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setdescription(e.target.value)}
              id="description"
              placeholder="Description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Priodity" className="text-right">
              Priodity
            </Label>
            <Select onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder={priority} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
