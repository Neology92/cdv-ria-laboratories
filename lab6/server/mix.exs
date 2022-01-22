defmodule StudentsApi.MixProject do
  use Mix.Project

  def project do
    [
      app: :students_api,
      version: "0.1.0",
      elixir: "~> 1.11",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger, :plug_cowboy],
      mod: {StudentsApi.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:plug_cowboy, "~> 2.2"},
      {:poison, "~> 4.0.1"},
      {:exsync, "~> 0.2", only: :dev},
      {:cors_plug, "~> 2.0"}
    ]
  end
end
