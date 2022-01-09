defmodule StudentsApi.DataAgent do
  use Agent

  def start_link(initial_value) when is_list(initial_value) do
    Agent.start_link(fn -> initial_value end, name: __MODULE__)
  end

  def get do
    Agent.get(__MODULE__, & &1)
  end

  def update(data) do
    Agent.update(__MODULE__, fn -> data end)
  end
end
