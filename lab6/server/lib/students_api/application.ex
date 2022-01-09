defmodule StudentsApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  alias StudentsApi.DataAgent

  @impl true
  def start(_type, _args) do
    children = [
      # Start HTTP server
      {DataAgent, []},
      {Plug.Cowboy, scheme: :http, plug: StudentsApi.Endpoint, options: [port: 4000]}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: StudentsApi.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
