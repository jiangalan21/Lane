import { useNavigate } from 'react-router';

const mockEntries = [
  {
    id: 1,
    orientation: 'portrait',
    placeholder: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    orientation: 'landscape',
    placeholder: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    orientation: 'portrait',
    placeholder: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    orientation: 'landscape',
    placeholder: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 5,
    orientation: 'portrait',
    placeholder: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 6,
    orientation: 'portrait',
    placeholder: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  },
  {
    id: 7,
    orientation: 'landscape',
    placeholder: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 8,
    orientation: 'portrait',
    placeholder: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  }
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-4">
      {/* Film reel - just photos */}
      <div className="space-y-4">
        {mockEntries.map((entry) => (
          <div
            key={entry.id}
            onClick={() => navigate(`/post/${entry.id}`)}
            className="w-full aspect-square rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
            style={{ background: entry.placeholder }}
          />
        ))}
      </div>

      {/* Empty State */}
      {mockEntries.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 mb-4">No moments yet</p>
          <button
            onClick={() => navigate('/create')}
            className="bg-[#4a6fa5] text-white px-6 py-3 rounded-full hover:bg-[#3d5a80] transition-colors"
          >
            Capture your first moment
          </button>
        </div>
      )}
    </div>
  );
}
