
import React, { useState } from 'react';
import { getTrailerRecommendation } from '../services/geminiService';

const TrailerRecommendation: React.FC = () => {
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    recommendedType: string;
    reasoning: string;
    safetyTip: string;
  } | null>(null);

  const handleRecommend = async () => {
    if (!length || !weight) return;
    setLoading(true);
    const result = await getTrailerRecommendation(length, weight);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Not sure what you need?</h3>
        <p className="text-blue-700">Tell us about your boat and our AI advisor will suggest the right trailer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <div className="space-y-2">
          <label className="text-sm font-bold text-blue-900 uppercase tracking-tight">Boat Length (Feet)</label>
          <input 
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g. 24"
            className="w-full p-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-blue-900 uppercase tracking-tight">Approx Weight (Lbs)</label>
          <input 
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 5000"
            className="w-full p-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <button 
        onClick={handleRecommend}
        disabled={loading || !length || !weight}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-spinner fa-spin"></i> Analyzing...
          </span>
        ) : 'Get Recommendation'}
      </button>

      {recommendation && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg">
              <i className="fa-solid fa-anchor"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Recommendation: {recommendation.recommendedType}</h4>
              <p className="text-gray-600 mt-2">{recommendation.reasoning}</p>
              <div className="mt-4 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                <p className="text-sm text-yellow-800 font-medium">
                  <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                  {recommendation.safetyTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailerRecommendation;
