import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Row from "@/components/ui/row";
import Layout from "@/components/layout";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getMenu, getGeneralSettings } from "@/lib/query";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact({ generalSettings, menu }) {
  const companyName = generalSettings?.CompanyName;
  const domain = generalSettings?.FrontUrl;
  const logo = generalSettings?.Logo?.data
    ? process.env.DATA_URL + generalSettings?.Logo?.data?.attributes?.url
    : "";
  const favicon = generalSettings?.Favicon?.data
    ? process.env.DATA_URL + generalSettings?.Favicon?.data?.attributes?.url
    : "";
  const index = generalSettings?.Index;
  const { t } = useTranslation("common");
  const { locale, defaultLocale, asPath } = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [captcha, setCaptcha] = useState(null);

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (captcha === null || "") {
      tempErrors["captcha"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          message: message,
          subject: subject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhone("");
        setCaptcha(null);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhone("");
      setCaptcha(null);
    }
  };
  return (
    <>
      <Head>
        <title>
          {generalSettings && companyName
            ? `${t("contact_title")} - ${companyName}`
            : t("contact_title")}
        </title>
        {!index ? <meta name="robots" content="noindex, nofollow" /> : null}
        <link rel="icon" href={favicon} sizes="any" />
        <meta name="description" content={t("contact_description")} />
        <meta
          property="og:title"
          content={
            generalSettings && companyName
              ? `${t("contact_title")} - ${companyName}`
              : t("contact_title")
          }
        />
        <meta property="og:description" content={t("contact_description")} />
        <meta property="og:image" content={logo} />
        <meta
          property="og:url"
          content={
            locale === defaultLocale
              ? domain + asPath
              : domain + "/" + locale + asPath
          }
        />
      </Head>
      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          <Title align="center" titleDesc={t("contact_description")}>
            {t("contact_title")}
          </Title>
          <div className=" lg:max-w-6xl mx-auto">
            <div class="w-full p-6 m-auto bg-white rounded-md shadow">
              <form onSubmit={handleSubmit} class="flex flex-col ">
                <div class="flex flex-col md:space-x-4  md:flex-row">
                  <div className="flex-1">
                    <div>
                      <label class="label">
                        <span class="text-base label-text">Ad Soyad</span>
                      </label>
                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                        placeholder="Ad Soyad"
                        class="w-full input input-bordered "
                      />
                      {errors?.fullname && (
                        <p className="text-red-500">Ad Soyad boş olamaz.</p>
                      )}
                    </div>

                    <div>
                      <label class="label">
                        <span class="text-base label-text">E-Posta</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="E-Posta"
                        class="w-full input input-bordered "
                      />
                      {errors?.email && (
                        <p className="text-red-500">E-Posta boş olamaz.</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div>
                      <label class="label">
                        <span class="text-base label-text">Telefon</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Telefon"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        class="w-full input input-bordered "
                      />
                      {errors?.phone && (
                        <p className="text-red-500">
                          Telefon numarası boş olamaz.
                        </p>
                      )}
                    </div>
                    <div>
                      <label class="label">
                        <span class="text-base label-text">Konu</span>
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                        placeholder="Konu"
                        class="w-full input input-bordered "
                      />
                      {errors?.fullname && (
                        <p className="text-red-500">Konu boş olamaz.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex-1">
                    <label className="form-control h-full">
                      <div className="label">
                        <span className="label-text">Mesajınız</span>
                      </div>
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        className="textarea textarea-bordered h-full"
                        placeholder="Mesajınız"
                      ></textarea>
                    </label>
                    {errors?.message && (
                      <p className="text-red-500">Mesaj boş olamaz.</p>
                    )}
                  </div>
                  <ReCAPTCHA
                    className="pt-2 "
                    onChange={setCaptcha}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  />
                  {errors?.captcha && (
                    <p className="text-red-500">
                      Lütfen kutucuğu işaretleyiniz.
                    </p>
                  )}
                  <div className="pt-2">
                    <button type="submit" class="btn btn-block btn-primary">
                      {" "}
                      {t("btn_send")}
                    </button>
                  </div>
                  <div className="text-left">
                    {showSuccessMessage && (
                      <p className="text-green-500 font-semibold text-sm my-2">
                        Teşekkürler! Mesajınız gönderildi.
                      </p>
                    )}
                    {showFailureMessage && (
                      <p className="text-red-500">
                        Hata! Mesajınız gönderilemedi. Tekrar deneyiniz.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {generalSettings.Iletisim &&
            generalSettings.Iletisim.map((contact) => (
              <div className=" lg:max-w-6xl mx-auto" key={contact.id}>
                <div className="flex flex-col justify-center  mx-auto  bg-white p-6  rounded-md shadow-md w-full space-y-4 md:space-x-4 md:space-y-0 md:flex-row ">
                  <div className=" flex-1 ">
                    {contact.GoogleMapsLink && (
                      <iframe
                        src={contact.GoogleMapsLink}
                        width="600"
                        height="250"
                        className="rounded w-full h-full min-h-[200px]"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )}
                  </div>

                  <div className="flex-1  space-y-2 flex flex-col justify-center">
                    <p className="text-on-background-color text-h5 bg-gray-100 p-4 rounded ">
                      {" "}
                      {contact.Baslik ? contact.Baslik : t("contact_address")}
                    </p>
                    {contact.Adres && (
                      <div className="flex space-x-2 items-center  border-b p-4 rounded">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          className="fill-on-background-color min-w-[30px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.25 13.75V26.25H8.75V20H11.25V26.25H18.75V13.75L10 7.5L1.25 13.75ZM16.25 23.75H13.75V17.5H6.25V23.75H3.75V15.0375L10 10.575L16.25 15.0375V23.75Z" />
                          <path d="M23.75 8.75H21.25V11.25H23.75V8.75Z" />
                          <path d="M23.75 13.75H21.25V16.25H23.75V13.75Z" />
                          <path d="M23.75 18.75H21.25V21.25H23.75V18.75Z" />
                          <path d="M12.5 3.75V6.2125L15 8V6.25H26.25V23.75H21.25V26.25H28.75V3.75H12.5Z" />
                        </svg>
                        <p className="text-on-background-color text-small-regular lg:text-normal-regular max-w-md">
                          {contact.Adres}
                        </p>
                      </div>
                    )}
                    {contact.Telefon && (
                      <div className="flex space-x-2 items-center  border-b p-4 rounded">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 50"
                          className="fill-on-background-color min-w-[30px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.95459 31.8087L15.2463 31.2045C16.5171 31.0587 17.7671 31.4962 18.6629 32.392L22.4963 36.2253C28.3921 33.2253 33.2254 28.4128 36.2254 22.4962L32.3713 18.642C31.4754 17.7462 31.0379 16.4962 31.1838 15.2253L31.7879 9.97534C32.0379 7.87118 33.8088 6.28784 35.9338 6.28784H39.5379C41.8921 6.28784 43.8504 8.24618 43.7046 10.6003C42.6004 28.392 28.3713 42.6003 10.6004 43.7045C8.24626 43.8503 6.28792 41.892 6.28792 39.5378V35.9337C6.26709 33.8295 7.85042 32.0587 9.95459 31.8087Z" />
                        </svg>

                        <Link
                          href={`tel:${contact.Telefon}`}
                          className="text-on-background-color text-small-regular lg:text-normal-regular"
                        >
                          {contact.Telefon}
                        </Link>
                      </div>
                    )}
                    {contact.EPosta && (
                      <div className="flex space-x-2 items-center   p-4 rounded">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          className="fill-on-background-color min-w-[30px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM23.75 22.5H6.25C5.5625 22.5 5 21.9375 5 21.25V10L13.675 15.425C14.4875 15.9375 15.5125 15.9375 16.325 15.425L25 10V21.25C25 21.9375 24.4375 22.5 23.75 22.5ZM15 13.75L5 7.5H25L15 13.75Z" />
                        </svg>

                        <Link
                          href={`mailto:${contact.EPosta}`}
                          className="text-on-background-color text-small-regular lg:text-normal-regular"
                        >
                          {contact.EPosta}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>{" "}
              </div>
            ))}
          {generalSettings.Depertmanlar && (
            <div className=" lg:max-w-6xl mx-auto">
              <Row rowCol="grid-cols-1 md:grid-cols-3">
                {generalSettings.Depertmanlar.map((depertman) => (
                  <div className="flex-1" key={depertman.id}>
                    <div className="flex flex-col justify-center   bg-white p-6  rounded-md shadow-md w-full space-y-4 md:space-x-4 md:space-y-0 md:flex-row ">
                      <div className="  w-full space-y-2 flex flex-col justify-center">
                        <p className="text-on-background-color text-h5 bg-gray-100 p-4 rounded ">
                          {" "}
                          {depertman.DepertmanAdi && depertman.DepertmanAdi}
                        </p>
                        {depertman.Yetkili && (
                          <div className="flex space-x-2 items-center  border-b p-4 rounded">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              className="fill-on-background-color min-w-[30px]"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 15C17.7625 15 20 12.7625 20 10C20 7.2375 17.7625 5 15 5C12.2375 5 10 7.2375 10 10C10 12.7625 12.2375 15 15 15ZM15 17.5C11.6625 17.5 5 19.175 5 22.5V25H25V22.5C25 19.175 18.3375 17.5 15 17.5Z" />
                            </svg>

                            <p className="text-on-background-color text-small-regular lg:text-normal-regular max-w-md">
                              {depertman.Yetkili}
                            </p>
                          </div>
                        )}

                        {depertman.Telefon && (
                          <div className="flex space-x-2 items-center  border-b p-4 rounded">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 50 50"
                              className="fill-on-background-color min-w-[30px]"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.95459 31.8087L15.2463 31.2045C16.5171 31.0587 17.7671 31.4962 18.6629 32.392L22.4963 36.2253C28.3921 33.2253 33.2254 28.4128 36.2254 22.4962L32.3713 18.642C31.4754 17.7462 31.0379 16.4962 31.1838 15.2253L31.7879 9.97534C32.0379 7.87118 33.8088 6.28784 35.9338 6.28784H39.5379C41.8921 6.28784 43.8504 8.24618 43.7046 10.6003C42.6004 28.392 28.3713 42.6003 10.6004 43.7045C8.24626 43.8503 6.28792 41.892 6.28792 39.5378V35.9337C6.26709 33.8295 7.85042 32.0587 9.95459 31.8087Z" />
                            </svg>

                            <Link
                              href={`tel:${depertman.Telefon}`}
                              className="text-on-background-color text-small-regular lg:text-normal-regular"
                            >
                              {depertman.Telefon}
                            </Link>
                          </div>
                        )}
                        {depertman.EPosta && (
                          <div className="flex space-x-2 items-center   p-4 rounded">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              className="fill-on-background-color min-w-[30px]"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM23.75 22.5H6.25C5.5625 22.5 5 21.9375 5 21.25V10L13.675 15.425C14.4875 15.9375 15.5125 15.9375 16.325 15.425L25 10V21.25C25 21.9375 24.4375 22.5 23.75 22.5ZM15 13.75L5 7.5H25L15 13.75Z" />
                            </svg>

                            <Link
                              href={`mailto:${depertman.EPosta}`}
                              className="text-on-background-color text-small-regular lg:text-normal-regular"
                            >
                              {depertman.EPosta}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>{" "}
                  </div>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  try {
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();

    return {
      props: {
        menu,
        generalSettings,

        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        generalSettings: {},
      },
    };
  }
}
