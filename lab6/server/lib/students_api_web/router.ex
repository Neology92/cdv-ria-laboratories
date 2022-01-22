defmodule StudentsApiWeb.Router do
  use StudentsApiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
    plug(ProperCase.Plug.SnakeCaseParams)
    plug(CORSPlug)
  end

  scope "/api", StudentsApiWeb do
    pipe_through(:api)

    resources("/students", StudentController, except: [:new, :edit])
  end
end
