import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import NavBar from "./components/NavBar";


function App() {

  return (
    <>
      <Box minH={"100vh"}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App;
