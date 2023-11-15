import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300  py-12 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <Image width={60} height={60} alt="" src="/ahead-logo.png" />
      </p>
      <p className="text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex gap-10 items-center justify-center mt-5 font-semibold">
        <div className="flex gap-2">
          <div className="bg-green-200 rounded-full">
            <LocationOnIcon />
          </div>
          <div className="">Augustraße 26, 10117 Berlin</div>
        </div>
        <div className="flex gap-2">
          <div className="bg-green-200 rounded-full">
            <EmailIcon />
          </div>
          <div className="">hi@ahead-app.com</div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/appleStoreIcon.svg"
          alt="download applestore"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
