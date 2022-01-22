defmodule StudentsApi.Student do
  @derive [Poison.Encoder]

  defstruct [:id, :index, :firstName, :lastName]
end
