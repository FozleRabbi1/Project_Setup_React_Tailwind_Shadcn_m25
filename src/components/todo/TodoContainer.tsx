import Container from "../ui/Container";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

export const buttonStyle =
  "bg-primary-gradient w-[120px] rounded-xl mb-4 px-3 py-2 font-semibold text-white text-lg";

const TodoContainer = () => {
  // form local data
  // const tasks = useAppSelector((state) => state.todos.todos);

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  console.log(todos);
  return (
    <Container>
      <h2 className="text-2xl font-semibold text-center py-5">My Todo</h2>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>

      <div className="bg-primary-gradient w-full rounded-xl p-1.5 ">
        {isLoading ? (
          <p className="text-white font-bold text-2xl text-center">
            Loading...
          </p>
        ) : (
          <div className="bg-white/25 rounded-xl p-2 space-y-2 ">
            {todos?.data?.length === 0 ? (
              <div className="bg-white p-4 rounded-md">
                <p className="text-center font-semibold text-xl">
                  There is no task pending
                </p>
              </div>
            ) : (
              todos?.data?.map((task) => (
                // <TodoCard key={task.id} task={task}></TodoCard>
                <TodoCard key={task._id} {...task}></TodoCard>
              ))
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default TodoContainer;

{
  /* <div className="bg-white p-4 rounded-md">
          <p className="text-center font-semibold text-xl">There is no task pending </p>
        </div> */
}
