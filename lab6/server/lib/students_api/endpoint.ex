defmodule StudentsApi.Endpoint do
  use Plug.Router

  alias StudentsApi.DataAgent
  alias StudentsApi.Student

  plug(Plug.Logger)
  plug(:match)

  plug(Plug.Parsers,
    parsers: [:json],
    pass: ["application/json"],
    json_decoder: Poison
  )

  plug(:dispatch)

  get "/api/students/:id" do
    student = DataAgent.get_student_by_id(conn.params["id"])

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(student))
  end

  put "/api/students/:id" do
    params = keys_to_atoms(conn.params)

    DataAgent.update_student(params)
    |> IO.inspect()

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(%{status: 200, message: "success"}))
  end

  get "/api/students" do
    students = DataAgent.get_all_students()

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(students))
  end

  post "/api/students" do
    %Student{
      id: DataAgent.get_next_id(),
      index: conn.params["index"],
      first_name: conn.params["firstName"],
      last_name: conn.params["lastName"]
    }
    |> DataAgent.push_student()

    students = DataAgent.get_all_students()

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(%{status: 200, message: "success"}))
  end

  match _ do
    send_resp(conn, 404, "Unknown request :( !")
  end

  # ------------------------
  # Private
  # ------------------------

  defp keys_to_atoms(map) do
    Enum.reduce(map, %{}, fn {key, val}, acc -> Map.put(acc, String.to_atom(key), val) end)
  end
end
