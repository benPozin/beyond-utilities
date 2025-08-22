'use client';
import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Event } from '../data/events';

export default function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const dt = new Date(event.date);
  const dateFmt = new Intl.DateTimeFormat('en-CA', { month: 'short', day: 'numeric' }).format(dt);
  const dow = new Intl.DateTimeFormat('en-CA', { weekday: 'short' }).format(dt);

  // tiny helper to preview text on hover overlay
  const blurbPreview = event.blurb.length > 140 ? event.blurb.slice(0, 137) + "…" : event.blurb;
  const speakersPreview = event.speakers.slice(0, 3).join(", ") + (event.speakers.length > 3 ? " +" : "");

  return (
    <div className="relative group">
      {/* Base clickable card (opens dialog on click) */}
      <button
        onClick={onClick}
        className="text-left w-full"
        aria-haspopup="dialog"
      >
        <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 rounded-2xl">
          <CardHeader className="space-y-2 p-5">
            {/* Top meta row */}
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="font-medium">{dow}</span>
              <span>{dateFmt}</span>
              <span>•</span>
              <span>{event.time}</span>
            </div>

            {/* Title */}
            <CardTitle className="text-xl leading-snug">{event.title}</CardTitle>

            {/* Track + category + inline CTA */}
            <CardDescription className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{event.category}</Badge>
                <span>{event.track}</span>
              </div>

              {/* Optional inline Sign Up (doesn't open dialog) */}
              {event.signupUrl && (
                <Link
                  href={event.signupUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-white text-xs hover:bg-blue-700"
                >
                  Sign up
                </Link>
              )}
            </CardDescription>
          </CardHeader>
        </Card>
      </button>

      {/* HOVER OVERLAY (non-interactive, so it never steals hover) */}
      <div
        className="
          pointer-events-none absolute inset-x-2 -bottom-2 translate-y-full
          opacity-0 group-hover:opacity-100 transition-opacity duration-150
          z-40
        "
      >
        <div className="
          rounded-xl border bg-white/95 shadow-xl ring-1 ring-black/5 overflow-hidden
          backdrop-blur
        ">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />
          <div className="p-4">
            <p className="text-sm text-gray-800">
              {blurbPreview || "Details coming soon."}
            </p>
            {event.speakers.length > 0 && (
              <p className="mt-2 text-xs text-gray-600">
                <span className="font-medium">Speakers: </span>
                {speakersPreview}
              </p>
            )}
            <p className="mt-2 text-[11px] text-blue-600">
              Click the card for full details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}