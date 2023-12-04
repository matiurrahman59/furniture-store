"use client";
import React, { useState } from "react";
import MoonIcon from "./moonIcon";
import { Switch } from "@headlessui/react";
import SunIcon from "./sunIcon";
import InstagramIcon from "./instagramIcon";
import PinterestIcon from "./pinterestIcon";
import YoutubeIcon from "./youtubeIcon";

export default function Footer() {
  const [enabled, setEnabled] = useState(false);

  return (
    <footer className="px-4 py-8">
      <div className="grid grid-cols-2 grid-rows-2 xl:flex xl:justify-between">
        <div className="col-span-3 pb-8">
          <div className="flex justify-center gap-8">
            <InstagramIcon />
            <PinterestIcon />
            <YoutubeIcon />
          </div>
        </div>

        <div className="row-span-2 text-gray">
          <p>© Instor 2024</p>
        </div>

        <div className="row-span-2 text-gray">
          <div className="flex items-center justify-end gap-2">
            <MoonIcon />
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-orange" : "bg-gray"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <SunIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
