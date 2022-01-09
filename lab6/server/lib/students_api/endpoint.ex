defmodule StudentsApi.Endpoint do
  use Plug.Router

  plug(Plug.Logger)
  plug(:match)

  plug(Plug.Parsers,
    parsers: [:json],
    pass: ["application/json"],
    json_decoder: Poison
  )

  plug(:dispatch)

  get "/api/students" do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Poison.encode!(%{response: "Hello world!"}))
  end

  match _ do
    send_resp(conn, 404, "Unknown request :( !")
  end
end
