"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../common/PrimaryButton";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import PaypalPaymentGateway from "./paypalPaymentGateway";
import Lottie from "lottie-react";
import successAnimation from "../../../public/animations/success.json";

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your Email."),
});

export default function PaymentDialog({ isOpen, close, count }) {
  const { t } = useTranslation();
  const [isPaypal, setIsPaypal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      // resetForm();
      setIsPaypal(true);
    },
  });

  const handleClose = () => {
    close();
    setIsPaypal(false);
    formik.setFieldValue("email", "");
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        handleClose();
        setIsSuccess(false);
      }, 4000);
    }
  }, [isSuccess]);
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleClose}
        __demoMode
      >
        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              {!isSuccess ? (
                <DialogPanel className="w-full max-w-lg rounded-xl  bg-white dark:bg-black  p-6 shadow-3xl relative">
                  <div className="relative">
                    <Image
                      src="/assets/images/ba.webp"
                      width={100}
                      height={100}
                      alt="ba"
                      className="rounded-full"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                      }}
                    />
                  </div>
                  <DialogTitle
                    as="h5"
                    className="text-base/7 text-black dark:text-white text-center mt-12"
                  >
                    <span>{t("Support")}</span>{" "}
                    <span className="font-semibold">
                      {t("Himanshu Sharma")}
                    </span>
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-black dark:text-white text-center">
                    {t("You’ll be charged")} ${count}
                  </p>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-10 flex flex-col gap-8">
                      <div>
                        <input
                          type="email"
                          id="email"
                          className="py-2 w-full rounded-lg px-3 border border-black dark:border-white"
                          name="email"
                          placeholder="Enter Your Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <small className="text-error">
                            {formik.errors.email}
                          </small>
                        )}
                      </div>
                      {!isPaypal ? (
                        <>
                          <PrimaryButton
                            text={"Support"}
                            className="font-medium"
                            type="submit"
                          />
                          <small className="text-center">
                            {t("Payment secured by")}{" "}
                            <span className="font-semibold">
                              {t("PayPal.")}
                            </span>
                            &nbsp;
                            {t(
                              "You’ll be taken to a thank you page after the payment."
                            )}
                          </small>
                        </>
                      ) : (
                        <PaypalPaymentGateway
                          amount={count}
                          setIsPaypal={setIsPaypal}
                          close={handleClose}
                          setIsSuccess={setIsSuccess}
                        />
                      )}
                    </div>
                  </form>
                </DialogPanel>
              ) : (
                <DialogPanel className="w-full max-w-lg rounded-xl  bg-white dark:bg-black px-2  pb-10 shadow-3xl">
                  <div className="flex flex-col items-center">
                    <Lottie
                      animationData={successAnimation}
                      loop={false}
                      style={{ height: 200, width: 200 }}
                    />
                    <p className="text-lg text-secondary -mt-10">
                      {t("Payment success!")}
                    </p>
                    <p className="text-sm dark:text-white xtext-black">
                      {t("Thank you for apreciating my work!")}
                    </p>
                  </div>
                </DialogPanel>
              )}
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
