'use client';

import { useMemo, useState } from 'react';
import { events as allEvents, Event } from '@/data/events';
import EventCard from '@/components/EventCard';
import EventDialog from '@/components/EventDialog';
import FilterChips from '@/components/FilterChips';

type Filter = 'All' | 'Major' | 'University';

function groupByMonth(evts: Event[]) {
  // { 'YYYY-MM': Event[] }
  return evts.reduce<Record<string, Event[]>>((acc, e) => {
    const d = new Date(e.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    (acc[key] ||= []).push(e);
    return acc;
  }, {});
}

export default function SchedulePage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Event | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const base = [...allEvents].sort((a, b) => a.date.localeCompare(b.date));
    return filter === 'All' ? base : base.filter((e) => e.category === filter);
  }, [filter]);

  const byMonth = useMemo(() => groupByMonth(filtered), [filtered]);
  const monthKeys = useMemo(() => Object.keys(byMonth).sort(), [byMonth]);

  return (
    <div className="space-y-6">
      {/* Header + helper text */}
      <div className="flex items-end justify-between gap-3">
        <h1 className="text-3xl font-semibold">Schedule</h1>
        <p className="text-sm text-slate-600">
          Hover (or tap) an event to see speakers and details.
        </p>
      </div>

      {/* Filter chips */}
      <FilterChips value={filter} onChange={setFilter} />

      {monthKeys.length === 0 && (
        <p className="text-slate-600">No events found.</p>
      )}

      <div className="space-y-10">
        {monthKeys.map((key) => {
          const [y, m] = key.split('-');
          const label = new Date(Number(y), Number(m) - 1, 1).toLocaleString('en-CA', {
            month: 'long',
            year: 'numeric',
          });

          return (
            <section key={key} className="space-y-4">
              <h2 className="text-2xl font-semibold">{label}</h2>

              {/* Slightly larger spacing between cards */}
              <div className="grid md:grid-cols-2 gap-5">
                {byMonth[key].map((evt) => (
                  <EventCard
                    key={evt.id}
                    event={evt}
                    onClick={() => {
                      setSelected(evt);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Event dialog (click-through details + Sign Up) */}
      <EventDialog open={open} onOpenChange={setOpen} event={selected} />
    </div>
  );
}