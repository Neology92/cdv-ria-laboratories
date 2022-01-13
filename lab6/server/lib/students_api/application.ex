defmodule StudentsApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  alias StudentsApi.DataAgent
  alias StudentsApi.Student

  @impl true
  def start(_type, _args) do
    children = [
      # Start HTTP server
      {DataAgent,
       [
         %Student{id: 1, index: 213_456, first_name: "Anna", last_name: "Nowak"},
         %Student{id: 2, index: 213_457, first_name: "Jan", last_name: "Kowalski"},
         %Student{id: 3, index: 213_458, first_name: "Zenon", last_name: "Zawada"}
       ]},
      {Plug.Cowboy, scheme: :http, plug: StudentsApi.Endpoint, options: [port: 4000]}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: StudentsApi.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
