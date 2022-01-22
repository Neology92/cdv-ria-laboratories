defmodule StudentsApi.Repo do
  use Ecto.Repo,
    otp_app: :students_api,
    adapter: Ecto.Adapters.Postgres
end
