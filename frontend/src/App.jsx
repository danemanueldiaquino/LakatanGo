import { Navigate, Route, Routes } from 'react-router-dom'
import BuyerLogin from './pages/auth/BuyerLogin.jsx'
import BuyerSignup from './pages/auth/BuyerSignup.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<BuyerLogin />} />
      <Route path="/signup" element={<BuyerSignup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
