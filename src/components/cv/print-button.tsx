"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button className="button-primary print-hidden" type="button" onClick={() => window.print()}>
      <Printer aria-hidden="true" /> Print or save as PDF
    </button>
  );
}
