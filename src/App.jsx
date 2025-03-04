import { ReactLenis } from "lenis/react";
import { Header } from "./components";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { UserProvider } from "./components/contexts/UserContext";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData
      ? JSON.parse(storedData)
      : {
          logoUrl: "/images/favicon.svg",
          isAppEditable: false,
          theme: "theme-dark",
          availabilityHeading: "Available for work",
          topHeading: "Building Scalable Modern Websites for the Future",
          topHeadingHeight: "152",
          availabilityIconUrl: "/images/avatar-1.png",
          bannerUrl: "/images/Untitled-a.png",
          bannerColor: "#38bdf8",
          aboutMe:
            "Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.",
          numberOfProjects: 45,
          yearOfExperience: 10,
          aboutMeIconUrl: "/images/avatar-1.png",
          skills: [],
          projects: [],
          emailUrl: "https://getform.io/f/bmddrxva",
          email: "sha685789@gmail.com",
          contactLinks: {
            github: "/",
            twitter: "/dfdsf",
            linkedin: "https://www.linkedin.com/in/shahvez-jumani/",
            instagram: "/",
          },
        };
  });
  const themes = ["theme-dark", "theme-light", "theme-golden", "theme-sky"];

  // Save updates to localStorage whenever `users` changes
  useEffect(() => {
    // localStorage.setItem("users", JSON.stringify(users));
    try {
      localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        console.error(
          "LocalStorage quota exceeded. Consider clearing unused data."
        );
        // Handle fallback: notify user, clear some storage, or use a different method.
      } else {
        throw error;
      }
    }
  }, [users]);
  // useEffect(()=>{
  //   document.querySelector("html").classList.remove("theme-light", "theme-dark");
  //   if (users.theme) {
  //     document.querySelector("html").classList.add(users.theme);
  // }
  // },[users.theme])

  useEffect(() => {
    const html = document.querySelector("html");
    themes.forEach((theme) => html.classList.remove(theme));
    if (users.theme) html.classList.add(users.theme);
  }, [users.theme]);

  const updateUser = (key, value) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [key]: value,
    }));
  };
  return (
    <ReactLenis root>
      <UserProvider value={{ users, updateUser }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Project />
          <Contact />
        </main>
        <Footer />
      </UserProvider>
    </ReactLenis>
  );
};

export default App;
