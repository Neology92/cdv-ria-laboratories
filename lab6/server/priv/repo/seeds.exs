# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     StudentsApi.Repo.insert!(%StudentsApi.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

[
  %{index: 213_456, first_name: "Anna", last_name: "Nowak"},
  %{index: 213_457, first_name: "Jan", last_name: "Kowalski"},
  %{index: 213_458, first_name: "Zenon", last_name: "Zawada"}
]
|> Enum.each(fn student_params ->
  StudentsApi.Repo.insert!(student_params)
end)
