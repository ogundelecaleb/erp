import React from "react";
import { DirectMessage } from "../Data";

const LastMessage = () => {
  return (
    <div className="p-3 md:p-4">
      {DirectMessage &&
        DirectMessage.map((msg, index) => (
          <ul>
            <li  className="flex-item gap-4 mb-2">
              <img
                src={msg?.image}
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />

              <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                {msg.name}
              </p>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default LastMessage;
