'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Link from "next/link";
import { Event } from '@/data/events';

export default function EventDialog({
  open, onOpenChange, event,
}: { open: boolean; onOpenChange: (v: boolean) => void; event: Event | null; }) {
  if (!event) return null;

  const dt = new Date(event.date);
  const dateStr = new Intl.DateTimeFormat('en-CA', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  }).format(dt);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>
            {dateStr} • {event.time} • {event.track} ({event.category})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p>{event.blurb}</p>

          {event.speakers.length > 0 && (
            <div>
              <p className="font-medium mb-1">Speakers</p>
              <ul className="list-disc list-inside text-sm">
                {event.speakers.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          )}

          {/* Sign up CTA (per-event) */}
          {event.signupUrl && (
            <div className="pt-2">
              <Link
                href={event.signupUrl}
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign up for this event
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}