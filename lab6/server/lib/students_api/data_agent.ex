defmodule StudentsApi.DataAgent do
  use Agent

  def start_link(initial_students) when is_list(initial_students) do
    Agent.start_link(fn -> {initial_students, length(initial_students)} end, name: __MODULE__)
  end

  def get_all_students do
    Agent.get(__MODULE__, fn {students, _} -> students end)
  end

  def get_next_id do
    Agent.get_and_update(__MODULE__, fn {students, next_id} ->
      {next_id, {students, next_id + 1}}
    end)
  end

  def push_student(new_item) do
    Agent.update(__MODULE__, fn {data, next_id} -> {[new_item | data], next_id} end)
  end

  def update_students(new_students) do
    Agent.update(__MODULE__, fn {_, next_id} -> {new_students, next_id} end)
  end
end
