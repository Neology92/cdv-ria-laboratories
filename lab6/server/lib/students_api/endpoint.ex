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
    IO.inspect(conn.params["id"])
    student = DataAgent.get_student_by_id(conn.params["id"])

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(student))
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
end
