"use client";
import React, { useState } from "react";
// import axiosServices from "@/utils/axios";
import axios from "axios";
import { SecondaryTitle } from "../common/typography.component";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { useTranslation } from "react-i18next";

function ContactUsForm() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/contact_us", {
        name: fullName,
        email,
        phone_no: phone,
        country: country,
        description: desc,
      })
      .then((res) => {
        if (res?.data?.status === "success") {
          setFullName("");
          setEmail("");
          setPhone("");
          setCountry("");
          setDesc("");
        }
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {});

  return (
    <div className="w-full contact-us-form rounded-lg p-5">
      <div className="flex flex-col gap-3">
        <div className="text-center">
          <SecondaryTitle
            className="text-center font-semibold"
            text={t("Request a Free Test Session")}
          />
        </div>
        <p className="text-purple">
          {t("Guaranteed response within one business day!")}
        </p>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-black px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                required
                id="fullName"
                type="text"
                placeholder={t("Full Name")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight input-border"
                id="email"
                required
                type="email"
                placeholder={t("Email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                id="phone"
                required
                type="number"
                placeholder={t("Phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                id="country"
                type="text"
                required
                placeholder={t("Country")}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onError
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 input-border focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                placeholder={t("Write your message here...")}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div>
              <SecondaryButton
                text={t("Send")}
                type="submit"
                className="m-auto"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
