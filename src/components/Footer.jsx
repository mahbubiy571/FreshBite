import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-[124px] py-[40px] flex flex-col-reverse items-center justify-center gap-6 sm:flex sm:flex-row sm:justify-between sm:gap-0 text-center">
        <span className="font-medium font-nunito text-[16px] leading-[150%] text-neutral-900">
          Made with ❤️ and 🥑
        </span>

        <ul className="flex gap-6">
          <li>
            <NavLink
              to="https://instagram.com"
              target="_blank"
              className="hover:opacity-70 active:opacity-100"
            >
              <img src="/assets/images/icon-instagram.svg" alt="Instagram" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://bsky.app"
              target="_blank"
              className="hover:opacity-70 active:opacity-100"
            >
              <img src="/assets/images/icon-bluesky.svg" alt="Bluesky" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://tiktok.com"
              target="_blank"
              className="hover:opacity-70 active:opacity-100"
            >
              <img src="/assets/images/icon-tiktok.svg" alt="TikTok" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
