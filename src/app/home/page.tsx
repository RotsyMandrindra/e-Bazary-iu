import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/ui/navbar/Navbar";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import Filter from "@/components/filter/Filter";
import About from "@/components/ui/about/About";
import TopCar from "@/components/ui/topCar/TopCar";
import TeamSection from "@/components/ui/team/TeamSection";

const Landing: FC = () => {
  return (
    <Box sx={{ position: "relative", backgroundColor: "background.default" }}>
      <Navbar />
      <HeroSection />
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        <Filter />
      </Box>
      <About />
      <TopCar />
      <TeamSection />
    </Box>
  );
};

export default Landing;
