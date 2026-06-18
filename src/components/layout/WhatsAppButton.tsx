"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Chat on WhatsApp"
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:animate-none -z-10" />
      
      {/* WhatsApp Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.022 0c3.218.001 6.243 1.253 8.516 3.527 2.273 2.274 3.524 5.3 3.524 8.518 0 6.646-5.37 12.019-12.016 12.019-1.995-.001-3.957-.5-5.714-1.455L0 24zm6.59-11.233c.124.209.209.452.32.673.498.995 1.238 1.83 2.115 2.502.876.673 1.879 1.157 2.973 1.411.393.091.795.14 1.196.147.45.008.895-.125 1.257-.393.361-.268.614-.668.706-1.116.056-.271.034-.55-.064-.809-.098-.258-.282-.47-.516-.606-.468-.273-1.082-.572-1.55-.705-.286-.081-.595-.039-.851.117-.256.156-.445.414-.529.712-.09.323-.294.606-.575.795-.281.189-.624.253-.949.18a4.99 4.99 0 0 1-2.18-1.25c-.569-.569-1.002-1.26-1.27-2.022-.114-.325-.098-.683.045-.996.143-.313.4-.555.72-.677.298-.113.522-.34.629-.636.107-.297.087-.624-.055-.905-.246-.489-.572-1.144-.755-1.611-.11-.284-.316-.519-.582-.663-.267-.144-.579-.187-.878-.12-.44.098-.827.362-1.077.733-.25.371-.358.823-.301 1.267.086.666.33 1.3.708 1.861.756 1.123 1.764 2.054 2.943 2.719z" />
      </svg>
    </a>
  );
}
