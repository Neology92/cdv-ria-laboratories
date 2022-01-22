# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :students_api,
  ecto_repos: [StudentsApi.Repo]

# Configures the endpoint
config :students_api, StudentsApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "BpEKffnoV7lcV5Qr3mhT2wZyKWp9Fz7LZXzC+J7aI+/w5LFlrgn1Fn86J70ICy92",
  render_errors: [view: StudentsApiWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: StudentsApi.PubSub,
  live_view: [signing_salt: "NS2rTojm"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :phoenix, :format_encoders, json: StudentsApi.CustomJSONEncoder

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
