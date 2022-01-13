defmodule StudentsApi.DataAgent do
  use Agent

  def start_link(initial_students) when is_list(initial_students) do
    Agent.start_link(fn -> {initial_students, length(initial_students)} end, name: __MODULE__)
  end

  # id

  def get_next_id do
    Agent.get_and_update(__MODULE__, fn {students, next_id} ->
      {next_id, {students, next_id + 1}}
    end)
  end

  # student

  def get_all_students do
    Agent.get(__MODULE__, fn {students, _} -> students end)
  end

  def get_student_by_id(id) do
    id = String.to_integer(id)

    Agent.get(__MODULE__, fn {students, _} ->
      students |> Enum.find(&(&1.id == id))
    end)
  end

  def update_student(params) do
    id = String.to_integer(params[:id])
    params = Map.delete(params, :id)

    Agent.update(__MODULE__, fn {data, next_id} ->
      new_data =
        Enum.map(data, fn elem ->
          if elem.id == id, do: Map.merge(elem, params) |> IO.inspect(), else: elem
        end)

      {new_data, next_id}
    end)
  end

  def push_student(new_item) do
    Agent.update(__MODULE__, fn {data, next_id} -> {[new_item | data], next_id} end)
  end

  def update_students(new_students) do
    Agent.update(__MODULE__, fn {_, next_id} -> {new_students, next_id} end)
  end
end
