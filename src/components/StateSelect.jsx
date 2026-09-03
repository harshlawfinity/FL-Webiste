"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { STATE_OPTIONS } from "@/lib/cityStateOptions";

// Searchable state picker — shared by hero and sidebar contact forms.
export default function StateSelect({ value, onChange, variant = "hero", required = true }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);

  const filteredStates = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return STATE_OPTIONS;
    return STATE_OPTIONS.filter((state) => state.toLowerCase().includes(needle));
  }, [query]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const wrapperClass =
    variant === "sidebar"
      ? "relative flex items-center border border-gray-300 rounded-md p-3 shadow-sm"
      : "relative flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition";

  const iconClass =
    variant === "sidebar" ? "text-gray-400 text-xl mr-3 shrink-0" : "text-gray-400 text-lg shrink-0";

  return (
    <div ref={rootRef} className={wrapperClass}>
      <FiMapPin className={iconClass} aria-hidden="true" />

      {/* Hidden field keeps native required validation on form submit */}
      <input type="hidden" name="state" value={value} required={required} />

      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="State"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full min-w-0 bg-transparent text-left outline-none ${
          variant === "sidebar" ? "text-gray-700" : "text-sm text-gray-700"
        } ${value ? "" : "text-gray-400"}`}
      >
        {value || "State*"}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2">
            <FiSearch className="shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search state..."
              className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
              autoFocus
            />
          </div>

          <ul role="listbox" className="max-h-48 overflow-y-auto py-1">
            {filteredStates.length ? (
              filteredStates.map((state) => (
                <li key={state}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={value === state}
                    onClick={() => {
                      onChange(state);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-violet-50 ${
                      value === state
                        ? "bg-violet-50 font-medium text-[#7A3EF2]"
                        : "text-gray-700"
                    }`}
                  >
                    {state}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-500">No state found</li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
