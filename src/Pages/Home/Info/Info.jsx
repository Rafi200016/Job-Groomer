import logo from "../../../assets/img/jobentryLogo.png";
const Info = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className=" rounded-lg w-1/2" />
        <div>
          <h1 className="text-5xl font-bold text">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="py-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <ul className="py-6">
            <li>1. Tempor erat elitr rebum at clita</li>
            <li>2. Aliqu diam amet diam et eos</li>
            <li>3. Clita duo justo magna dolore erat amet</li>
          </ul>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
