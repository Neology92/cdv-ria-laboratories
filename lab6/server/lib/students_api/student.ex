defmodule StudentsApi.Student do
  @derive [Poison.Encoder]

  defstruct [:id, :index, :first_name, :last_name]
end
