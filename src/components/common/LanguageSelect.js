import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

const languageMap = {
  en: { label: "English", name: "en" },
  hi: { label: "Hindi", name: "hi" },
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-[#F8C401] px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
            >
              <Icon icon="mdi:language" fontSize={22} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              open={!!menuAnchor}
              anchorEl={menuAnchor}
              onClose={() => setMenuAnchor(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform max-w-[120px]">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white py-2 px-4">
                    <ul>
                      {Object.keys(languageMap)?.map((item) => (
                        <li
                          key={item}
                          onClick={() => {
                            i18next.changeLanguage(item);
                            setMenuAnchor(null);
                          }}
                          className="text-sm text-black cursor-pointer nav-link my-2"
                        >
                          {languageMap[item].label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LanguageSelect;
