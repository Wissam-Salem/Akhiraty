import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Meccan from "./pages/Surahs/Meccan/Meccan";
import Madinan from "./pages/Surahs/Madinan/Madinan";
import SurahPage from "./pages/SurahPage/SurahPage";
import SupportUs from "./pages/SupportUs/SupportUs";
import Azkar from "./pages/Azkar/Azkar";
import DayAzkar from "./pages/DayAzkar/DayAzkar";
import NightZekr from "./pages/NightZekr/NightZekr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/surahs/meccan" element={<Meccan />} />
        <Route path="/surahs/madinan" element={<Madinan />} />
        <Route path="/:revelation/:id" element={<SurahPage />} />
        <Route path="/azkar" element={<Azkar />} />
        <Route path="/day_zekr" element={<DayAzkar />} />
        <Route path="/night_zekr" element={<NightZekr />} />
        <Route path="/support_us" element={<SupportUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
