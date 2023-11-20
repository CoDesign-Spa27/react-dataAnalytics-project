import React from "react";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          veritatis a? Id laudantium reprehenderit aspernatur neque illum
          perspiciatis necessitatibus at.
        </p>
        <div className="flex gap-5 md:w-[75%] md:justify-between my-4">
          <Facebook className="bg-white text-black rounded-md" />
          <Twitter />
          <Linkedin />
          <Instagram />
          <Github />
        </div>
      </div>
      <div className="lg:col-span-2 justify-between flex">
          <div>
        <h6 className="font-medium text-gray-400 py-2">Solutions</h6>
             <ul>
             <li className="py-2 text-sm">Analystics</li>
             <li className="py-2 text-sm">Marketing</li>
             <li className="py-2 text-sm">Insights</li>
             <li className="py-2 text-sm">Commerce</li>
             </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400 py-2">Company</h6>
             <ul>
             <li className="py-2 text-sm">Analystics</li>
             <li className="py-2 text-sm">Marketing</li>
             <li className="py-2 text-sm">Insights</li>
             <li className="py-2 text-sm">Commerce</li>
             </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400 py-2">Policies</h6>
             <ul>
             <li className="py-2 text-sm">Analystics</li>
             <li className="py-2 text-sm">Marketing</li>
             <li className="py-2 text-sm">Insights</li>
             <li className="py-2 text-sm">Commerce</li>
             </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400  py-2">Support</h6>
             <ul>
             <li className="py-2 text-sm">Analystics</li>
             <li className="py-2 text-sm">Marketing</li>
             <li className="py-2 text-sm">Insights</li>
             <li className="py-2 text-sm">Commerce</li>
             </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
