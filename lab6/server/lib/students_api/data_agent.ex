defmodule StudentsApi.DataAgent do
  use Agent

  alias StudentsApi.Student

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
    params = keys_to_atoms(params)
    id = String.to_integer(params[:id])
    params = Map.delete(params, :id)

    Agent.update(__MODULE__, fn {data, next_id} ->
      new_data =
        Enum.map(data, fn elem ->
          if elem.id == id, do: Map.merge(elem, params), else: elem
        end)

      {new_data, next_id}
    end)
  end

  def push_student(params) do
    params = keys_to_atoms(params)

    new_student = %Student{
      id: DataAgent.get_next_id(),
      index: params[:index],
      first_name: params[:first_name],
      last_name: params[:last_name]
    }

    Agent.update(__MODULE__, fn {data, next_id} -> {[new_student | data], next_id} end)
  end

  def update_students(new_students) do
    Agent.update(__MODULE__, fn {_, next_id} -> {new_students, next_id} end)
  end

  # ------------------------
  # Private
  # ------------------------

  defp keys_to_atoms(map) do
    Enum.reduce(map, %{}, fn {key, val}, acc -> Map.put(acc, String.to_atom(key), val) end)
  end
end
