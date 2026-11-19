import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import svgPaths from "../../imports/WriteCaption/svg-5zb1nmlhe8";

const prompts = [
  "What made you smile today?",
  "What surprised you?",
  "What are you grateful for?",
  "What did you notice for the first time?",
  "Who made your day better?",
  "What small moment do you want to remember?"
];

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('');
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [selectedPrompts] = useState(() => {
    // Randomly select 3 prompts
    const shuffled = [...prompts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  });

  const handleSubmit = () => {
    // In a real app, this would save to a database
    console.log({ title, mood, answers });
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header with back arrow */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold">New Entry</h1>
      </div>

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

      {/* Arrow decoration - from Figma design */}
      <div className="hidden md:block fixed left-8 top-32 w-16 h-16 opacity-20">
        <svg className="w-full h-full" fill="white" viewBox="0 0 83.6396 147.279">
          <path d={svgPaths.p229ff380} />
        </svg>
      </div>

      <div className="space-y-6">
        {/* Title Input - matches Figma design */}
        <div>
          <label className="block text-sm text-white/60 mb-2">Title / Mood / Emoji</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-6">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give this moment a title..."
                className="w-full bg-transparent border-none outline-none text-lg"
              />
            </div>
            <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-6">
              <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Emoji or mood..."
                className="w-full bg-transparent border-none outline-none text-lg text-center text-4xl"
                maxLength={2}
              />
            </div>
          </div>
        </div>

        {/* Optional Image Upload */}
        <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <ImageIcon className="w-5 h-5 text-white/40" />
            <span className="text-white/60">Add a photo (optional)</span>
          </div>
          <button className="w-full border-2 border-dashed border-white/20 rounded-lg py-8 text-white/40 hover:border-white/40 hover:text-white/60 transition-colors">
            Click to upload or drag and drop
          </button>
        </div>

        {/* Reflection Prompts - matches Figma design */}
        <div className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-6">
          <p className="text-sm text-white/60 mb-6">
            Reflect on today with a few prompts to help capture the essence of this moment
          </p>

          <div className="space-y-6">
            {selectedPrompts.map((prompt, index) => (
              <div key={index}>
                <label className="block text-base font-semibold mb-3">{prompt}</label>
                <textarea
                  value={answers[prompt] || ''}
                  onChange={(e) =>
                    setAnswers({ ...answers, [prompt]: e.target.value })
                  }
                  placeholder="Your thoughts..."
                  className="w-full bg-[#1a2332] rounded-lg p-4 min-h-[100px] resize-none border border-white/10 focus:border-[#4a6fa5] outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button - matches Figma design */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={!title || !mood}
            className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-full px-16 py-4 text-lg font-medium hover:bg-[#2a2a2a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Save Entry
          </button>
        </div>

        <p className="text-center text-sm text-white/40 mt-4">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  );
}
