import React from "react";
import ButtonPrimary from "../Buttons/Button";
import useUserContext from "../contexts/UserContext";

export default function Footer() {
  const { users, updateUser } = useUserContext();

  const sitemap = [
    {
      id: 1,
      label: "Home",
      href: "#home",
    },
    {
      id: 2,
      label: "About",
      href: "#about",
    },
    {
      id: 3,
      label: "Work",
      href: "#work",
    },
    {
      id: 4,
      label: "Skills",
      href: "#skills",
    },
    {
      id: 5,
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
        id:1,
      label: "GitHub",
      name: "github",
      //   href: 'https://www.github.com/codewithsadee-org'
    },
    {
        id:2,
      label: "LinkedIn",
      name: "linkedin",
      //   href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        id:3,
      label: "Twitter X",
      name: "twitter",
      //   href: 'https://x.com/codewithsadee_'
    },
    {
        id:4,
      label: "Instagram",
      name: "instagram",
      //   href: 'https://www.instagram.com/codewithsadee'
    },
    // {
    //     id:5,
    //   label: "CodePen",
    //     href: 'https://codepen.io/codewithsadee'
    // },
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href={`mailto:${users.email}`}
              label={"Start Project"}
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <div>
                <p className="mb-2">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href, id }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="block text-sm text-skin-secondary py-1 transition-colors hover:text-skin-base"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div>
                <p className="mb-2">Socials</p>
                <ul>
                  {socials.map(({ label, id, name }) => (
                    <li key={id}>
                      <a
                        href={users.contactLinks[name]}
                      target="_blank"
                        className="block text-sm text-skin-secondary py-1 transition-colors hover:text-skin-base"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 pb-8">
          <a href="/">
                  <img src={users.logoUrl} alt="logo" width={40} height={40} className="rounded-2xl w-[45px] h-[45px] object-cover object-top"/>
                  
          </a>
          <p className="text-skin-secondary text-sm">&copy; {new Date().getFullYear()} <span className="text-skin-base tracking-wide">ShahvezJumani</span></p>
        </div>
      </div>
    </footer>
  );
}
