import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    // getTodos: builder.query({
    //   query: (priority) => ({
    //     // url: `/tasks?priority=${priority}`,  //===========>>> string হিসেবে send করতে হবে
    //     url: `/tasks`,
    //     method: "GET",
    //     params: { priority }, //===========>>> object হিসেবে send করতে  হবে
    //   }),
    //   providesTags: ["todo"],
    // }),
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params,
        };
      },
      providesTags: ["todo"],
    }),

    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    isCompletedToggle: builder.mutation({
      query: (options) => {
        return {
          url: `/task/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useIsCompletedToggleMutation,
} = baseApi;
