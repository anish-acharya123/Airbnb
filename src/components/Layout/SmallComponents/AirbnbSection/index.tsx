import { Icon } from "@iconify/react/dist/iconify.js";
// import { AIRBNB_CONTSTANT } from "../../../../constants/FooterConstant";

const Airbnbsection = () => {
  return (
    <div className="py-6 flex justify-between flex-row w-full">
      <section className="flex gap-4 ">
        <p>© 2024 Airbnb, Inc.</p>
        <ul className="flex gap-2 items-center justify-center ">
          <li className="">
            <a href="">Terms</a>
          </li>
          <li>
            <span> .</span>
          </li>
          <li>
            <a href="">Sitemap</a>
          </li>
          <li>
            <span> .</span>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <span> .</span>
          </li>
          <li>
            <a href="">Your Privacy Choices</a>
          </li>
        </ul>
      </section>
      <section className="flex  gap-6 font-medium">
        <span className="flex items-center justify-center gap-2">
          <figure>
            <Icon icon="mingcute:earth-line" className="h-6 w-6" />
          </figure>
          <p>English (us)</p>
        </span>
        <span className="">$ USD</span>
        <span className="flex gap-3">
          <Icon icon="uil:facebook" className="h-6 w-6" />
          <Icon icon="fa-brands:twitter-square" className="h-6 w-6" />
          <Icon icon="mage:instagram-square" className="h-6 w-6" />
        </span>
      </section>
    </div>
  );
};

export default Airbnbsection;
