import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white">
      <div className="w-full flex justify-center items-center my-32">
        <div className="w-full flex justify-center">
          <img
            className="w-96 h-80"
            src="/assets/programmer-2.png"
            alt="profile-image"
          />
          <div className="w-1/2 flex flex-col justify-center">
            <p className="text-6xl py-10">
              {t("components.home.helloVisitor")}
            </p>
            <p className="text-4xl">
              {`${t("components.home.im")} `}
              <strong className="text-orange-400">Sued Nepomuceno Muniz</strong>
              .
            </p>
            <TypeAnimation
              sequence={[
                "Fullstack Software Developer",
                500,
                "Avenue Code",
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
          src="/assets/profile-image.png"
          alt="Sued Nepomuceno"
        />
        <div>
          <p className="text-orange-400 text-center font-bold text-4xl pb-10">
            {t("components.home.introduction")}
          </p>
          <p className="text-justify text-2xl leading-10">
            {t("components.home.introductionText")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
