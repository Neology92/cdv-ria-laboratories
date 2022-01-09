defmodule Math.CORS do
  use Corsica.Router,
    origins: ["*"],
    allow_headers: :all,
    allow_methods: :all,
    allow_credentials: true,
    max_age: 600

  resource("/*", origins: "*")
end
