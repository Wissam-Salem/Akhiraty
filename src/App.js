import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Meccan from "./pages/Surahs/Meccan/Meccan";
import Madinan from "./pages/Surahs/Madinan/Madinan";
import SurahPage from "./pages/SurahPage/SurahPage";
import SupportUs from "./pages/SupportUs/SupportUs";
import Azkar from "./pages/Azkar/Azkar";
import DayAzkar from "./pages/DayAzkar/DayAzkar";
import NightZekr from "./pages/NightZekr/NightZekr";
import Reciters from "./pages/Reciters/Reciters";
import { QueryClient, QueryClientProvider } from "react-query";
import Radio from "./pages/Radio/Radio";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/surahs/meccan" element={<Meccan />} />
          <Route path="/surahs/madinan" element={<Madinan />} />
          <Route path="/:revelation/:id" element={<SurahPage />} />
          <Route path="/azkar" element={<Azkar />} />
          <Route path="/day_zekr" element={<DayAzkar />} />
          <Route path="/night_zekr" element={<NightZekr />} />
          <Route path="/reciters" element={<Reciters />} />
          <Route path="/radio/:id" element={<Radio />} />
          <Route path="/support_us" element={<SupportUs />} />
        </Routes>
      </QueryClientProvider >
    </BrowserRouter>

  );
}

export default App;
