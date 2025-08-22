'use client';
import { Badge } from '@/components/ui/badge';

type Filter = 'All' | 'Major' | 'University';

export default function FilterChips({
  value, onChange,
}: { value: Filter; onChange: (v: Filter) => void }) {
  const opts: Filter[] = ['All', 'Major', 'University'];
  return (
    <div className="flex gap-2 flex-wrap">
      {opts.map((opt) => (
        <button key={opt} onClick={() => onChange(opt)}>
          <Badge variant={value === opt ? 'default' : 'secondary'}>
            {opt}
          </Badge>
        </button>
      ))}
    </div>
  );
}