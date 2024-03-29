import { Tooltip } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white w-full mt-40 mb-28">
      <div className="text-center">
        <div className="mb-16 text-orange-400 text-2xl font-bold">
          {t("components.contact.contact")}
        </div>
      </div>

      <div className="text-lg info-card rounded-3xl text-center p-5">
        <div className="my-10">
          {`${t("components.contact.projectsText")} `}
          <strong className="text-orange-400">Github</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip
                content={`${t("components.contact.goTo")} Github`}
                placement="right"
              >
                <a
                  href="https://github.com/suedmuniz1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrGithub size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>

        <div className="my-10">
          {`${t("components.contact.professionalInformation")} `}{" "}
          <strong className="text-orange-400">LinkedIn</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip
                content={`${t("components.contact.goTo")} LinkedIn`}
                placement="right"
              >
                <a
                  href="https://linkedin.com/in/suedmuniz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>

        <div className="my-10">
          {`${t("components.contact.personalActivities")} `}
          <strong className="text-orange-400">Instagram</strong>:
          <div className="flex justify-center items-center my-5">
            <button className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-400 duration-300">
              <Tooltip
                content={`${t("components.contact.goTo")} Instagram`}
                placement="right"
              >
                <a
                  href="https://instagram.com/suedm1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={60} />
                </a>
              </Tooltip>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
