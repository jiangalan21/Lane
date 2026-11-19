import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Heart } from 'lucide-react';
import { useState } from 'react';

// Mock data - in a real app this would come from a database
const mockPosts: { [key: string]: any } = {
  '1': {
    id: 1,
    date: 'April 28, 2026',
    title: 'Morning Coffee',
    mood: '☕',
    isFavorite: true,
    orientation: 'portrait',
    prompts: [
      {
        question: 'What made you smile today?',
        answer: 'The way the morning light hit my coffee cup, creating this perfect golden glow. It reminded me to slow down and appreciate small beauties.'
      },
      {
        question: 'What surprised you?',
        answer: 'How quiet the neighborhood was at 6am. Just birds and the distant hum of the city waking up.'
      }
    ]
  },
  '2': {
    id: 2,
    date: 'April 25, 2026',
    title: 'Walk in the Park',
    mood: '🌳',
    isFavorite: false,
    orientation: 'landscape',
    prompts: [
      {
        question: 'What did you notice for the first time?',
        answer: 'There\'s a bench under the old oak tree I\'ve walked past a hundred times but never really seen. Today I sat there for twenty minutes.'
      },
      {
        question: 'What are you grateful for?',
        answer: 'Having the time and health to take these walks. Not everyone has that luxury.'
      },
      {
        question: 'What small moment do you want to remember?',
        answer: 'A child feeding ducks with her grandmother. The pure joy on her face when they came closer.'
      }
    ]
  }
};

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = mockPosts[id || '1'];
  const [isFavorite, setIsFavorite] = useState(post?.isFavorite || false);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-white/60">Entry not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-[#4a6fa5] hover:underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  const isPortrait = post.orientation === 'portrait';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-400' : ''}`} />
          <span className="text-sm">favorite</span>
        </button>
      </div>

      {/* Date */}
      <div className="text-center mb-8">
        <p className="text-2xl font-medium">[ {post.date} ]</p>
      </div>

      {/* Main Content Card */}
      <div className={`bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] rounded-lg p-8 mb-8 ${isPortrait ? 'max-w-2xl mx-auto' : ''}`}>
        {/* Title and Mood */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">{post.mood}</span>
            <h1 className="text-3xl font-semibold">[ {post.title} ]</h1>
          </div>
        </div>

        {/* Photo Placeholder */}
        {isPortrait ? (
          <div className="bg-[#1a2332] rounded-lg aspect-[3/4] max-w-md mx-auto mb-8 flex items-center justify-center border border-white/10">
            <span className="text-white/20 text-lg">Photo</span>
          </div>
        ) : (
          <div className="bg-[#1a2332] rounded-lg aspect-[16/9] mb-8 flex items-center justify-center border border-white/10">
            <span className="text-white/20 text-lg">Photo</span>
          </div>
        )}

        {/* Prompts and Answers */}
        <div className="space-y-6">
          {post.prompts.map((item: any, index: number) => (
            <div key={index} className="border-l-2 border-[#4a6fa5] pl-4">
              <p className="text-lg font-semibold mb-2 text-[#4a6fa5]">
                [ {item.question} ]
              </p>
              <p className="text-white/80 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Metadata Footer */}
      <div className="text-center text-sm text-white/40">
        <p>Created on {post.date}</p>
        <p className="mt-2">
          {isPortrait ? '📱 Portrait' : '📐 Landscape'} Entry
        </p>
      </div>
    </div>
  );
}
