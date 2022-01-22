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

  plug(CORSPlug)

  plug(:dispatch)

  get "/api/students/:id" do
    student = DataAgent.get_student_by_id(conn.params["id"])

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(student))
  end

  delete "/api/students/:id" do
    res =
      case DataAgent.remove_student(conn.params["id"]) do
        :ok -> %{status: 200, message: "success"}
        err -> %{status: 500, message: err}
      end

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(res))
  end

  put "/api/students/:id" do
    res =
      case DataAgent.update_student(conn.params) do
        :ok -> %{status: 200, message: "success"}
        err -> %{status: 500, message: err}
      end

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(res))
  end

  get "/api/students" do
    students = DataAgent.get_all_students()

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(students))
  end

  post "/api/students" do
    res =
      case DataAgent.push_student(conn.params) do
        :ok -> %{status: 200, message: "success"}
        err -> %{status: 500, message: err}
      end

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(res))
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
