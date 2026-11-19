import { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function ProfilePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Mock calendar data - dates with entries
  const datesWithEntries = [
    new Date(2026, 3, 28), // April 28
    new Date(2026, 3, 25), // April 25
    new Date(2026, 3, 22), // April 22
    new Date(2026, 3, 18), // April 18
  ];

  const currentMonth = new Date(2026, 3, 1); // April 2026
  const daysInMonth = new Date(2026, 4, 0).getDate();
  const firstDayOfMonth = new Date(2026, 3, 1).getDay();

  const hasEntry = (day: number) => {
    return datesWithEntries.some(
      (date) =>
        date.getDate() === day &&
        date.getMonth() === currentMonth.getMonth() &&
        date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const renderCalendar = () => {
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Day headers
    days.push(
      <div key="headers" className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map((name) => (
          <div key={name} className="text-center text-xs text-white/40 p-2">
            {name}
          </div>
        ))}
      </div>
    );

    // Empty cells for days before month starts
    const cells = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<div key={`empty-${i}`} className="p-2" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEntryToday = hasEntry(day);
      cells.push(
        <button
          key={day}
          onClick={() => setSelectedDate(new Date(2026, 3, day))}
          className={`p-2 rounded-lg text-sm transition-colors ${
            hasEntryToday
              ? 'bg-[#4a6fa5] text-white font-semibold hover:bg-[#3d5a80]'
              : 'text-white/60 hover:bg-white/5'
          }`}
        >
          {day}
        </button>
      );
    }

    days.push(
      <div key="days" className="grid grid-cols-7 gap-2">
        {cells}
      </div>
    );

    return days;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Menu Icon - matches Figma design */}
      <div className="fixed top-16 right-4 z-40">
        <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] w-12 h-12 rounded flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <line stroke="white" strokeWidth="2" x1="6" x2="18" y1="7" y2="7" />
            <line stroke="white" strokeWidth="2" x1="6" x2="18" y1="12" y2="12" />
            <line stroke="white" strokeWidth="2" x1="6" x2="18" y1="17" y2="17" />
          </svg>
        </div>
      </div>

      {/* Profile Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        {/* Profile Picture Circle */}
        <div className="flex justify-center mb-4">
          <div className="w-40 h-40 rounded-full bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,1)] flex items-center justify-center">
            <span className="text-2xl text-white/60">pfp</span>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#4a6fa5]">42</div>
            <div className="text-sm text-white/60">Entries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#4a6fa5]">8</div>
            <div className="text-sm text-white/60">Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#4a6fa5]">127</div>
            <div className="text-sm text-white/60">Days</div>
          </div>
        </div>
      </div>

      {/* Posts Calendar */}
      <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <CalendarIcon className="w-6 h-6 text-[#4a6fa5]" />
          <h2 className="text-xl font-semibold">Posts Calendar</h2>
        </div>

        <div className="bg-[#d9d9d9] rounded-lg p-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-black">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
          </div>
          <div className="text-black">{renderCalendar()}</div>
        </div>

        {selectedDate && (
          <div className="mt-4 p-4 bg-[#1a2332] rounded-lg">
            <p className="text-sm text-white/60">
              Selected: {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            {hasEntry(selectedDate.getDate()) && (
              <p className="text-sm text-[#4a6fa5] mt-2">You have an entry on this day ✓</p>
            )}
          </div>
        )}
      </div>

      {/* Account Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Account</h3>
        <button className="w-full bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-4 text-left hover:bg-[#2a2a2a] transition-colors">
          Settings
        </button>
        <button className="w-full bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-4 text-left hover:bg-[#2a2a2a] transition-colors">
          Export Entries
        </button>
        <button className="w-full bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-4 text-left text-red-400 hover:bg-[#2a2a2a] transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  );
}
