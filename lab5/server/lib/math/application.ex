defmodule Math.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Plug.Cowboy.child_spec(
        scheme: :http,
        plug: Math.Router,
        options: [port: Application.get_env(:math, :port)]
      )
      # Starts a worker by calling: Math.Worker.start_link(arg)
      # {Math.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Math.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
