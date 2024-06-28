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

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setdescription] = useState("");

  const onSubmitData = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, description });
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
