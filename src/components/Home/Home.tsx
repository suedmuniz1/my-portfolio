import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="text-white">
      <div className="w-full flex justify-center items-center my-32">
        <div className="w-full flex justify-center">
          <img
            className="w-96 h-80"
            src="./src/assets/programmer-2.png"
            alt="profile-image"
          />
          <div className="w-1/2 flex flex-col justify-center">
            <p className="text-6xl py-10">Hello, visitor!</p>
            <p className="text-4xl">
              I'm{" "}
              <strong className="text-orange-400">Sued Nepomuceno Muniz</strong>
              .
            </p>
            <TypeAnimation
              sequence={[
                "Fullstack Software Developer",
                500,
                "At Avenue Code",
                500,
              ]}
              className="text-3xl text-orange-400"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-column justify-center items-center rounded-3xl p-14 info-card">
        <img
          className="w-52 h-52 mr-12"
          src="./src/assets/profile-image.png"
          alt="Sued Nepomuceno"
        />
        <div>
          <p className="text-center text-4xl pb-10">
            Let me <span style={{ color: "#fc9e4f" }}>introduce</span> myself
          </p>
          <p className="text-justify text-2xl leading-10">
            I'm a guy that likes programming and learning new things. My father
            encouraged me to start building my first algorythms, and since then
            I started to go deep in programming, learning new tecnologies,
            building projects, and growing up professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
