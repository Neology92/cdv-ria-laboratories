defmodule Math.Router do
  use Plug.Router
  use Plug.Debugger
  require Logger
  plug(Plug.Logger, log: :debug)
  plug(Math.CORS)

  plug(:match)

  plug(Plug.Parsers,
    parsers: [:json],
    pass: ["application/json"],
    json_decoder: Poison
  )

  plug(:dispatch)

  get "/" do
    send_file(conn, 200, "lib/templates/lab5.html")
  end

  get "/api/math" do
    {status, body} =
      case conn.query_params do
        %{"x" => x, "y" => y} ->
          x = String.to_integer(x)
          y = String.to_integer(y)
          {200, Poison.encode!(%{sum: x + y, diff: x - y, prod: x * y, quo: x / y})}

        _ ->
          {400, "Bad params"}
      end

    conn
    |> resp(status, body)
    |> send_resp()
  end

  match _ do
    send_resp(conn, 404, "Not found")
  end
end
