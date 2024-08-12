import { Route, Routes } from "react-router-dom"
import { authProtectedRoutes, publicRoutes, unAuthProtectedRoutes } from "./routes/allRoutes"
import NonAuthLayout from "./layouts/nonAuthLayout"
import { AuthProtectedLayout } from "./layouts/authProtectedLayout"

function App() {
  return (
    <Routes>
      <Route>
        {unAuthProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
          />
        ))}
      </Route>

      <Route>
        {publicRoutes.map((route, idx) => (
          <Route path={route.path} element={route.component} key={idx} exact={true} />
        ))}
      </Route>

      <Route>
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<AuthProtectedLayout>{route.component}</AuthProtectedLayout>}
            key={idx}></Route>
        ))}
      </Route>
    </Routes>
  )
}

export default App
