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
    <footer>
      <div className="flex items-center justify-between py-5">
        <p>© Instor 2024</p>
        <div className="flex self-start justify-center gap-4 lg:gap-8">
              <InstagramIcon />
              <PinterestIcon />
              <YoutubeIcon />
        </div>
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
    </footer>
  );
}
