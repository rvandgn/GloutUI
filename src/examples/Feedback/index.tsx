import { useState } from "react";

interface ErrorAlertTypes {
  name: string;
  code: string;
  jsx: string;
}

export default function ErrorAlertComponent() {
  const [code] = useState<string>(
    `<div class="bg-red-100 rounded-lg p-4">
      <div class="flex gap-3 items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 fill-none stroke-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 class="font-medium text-base">This is a warning message</h3>
      </div>
      <p class="pl-9 text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia
        neque suscipit asperiores perferendis dolorem.
      </p>
    </div>`);

  const data: ErrorAlertTypes = {
    name: "Error Alert Component",
    code: code,
    jsx: code.replaceAll('class', 'className'),
  };

  return data;
}