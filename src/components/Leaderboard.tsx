import React from 'react';
import { Section } from './Section';

interface Athlete {
  name: string;
  score: string | number;
}

export const Leaderboard: React.FC = () => {
  const rawData: Athlete[] = [
    { name: "Daniela", score: 163 },
    { name: "Andryatsys", score: 160 },
    { name: "El Pony", score: 145 },
    { name: "Hecluimar", score: 145 },
    { name: "Leo P.", score: 145 },
    { name: "Jeudis", score: 143 },
    { name: "Valeria", score: 141 },
    { name: "Cecilia", score: 134 },
    { name: "Valery", score: 134 },
    { name: "Gabriel", score: 128 },
    { name: "Carolina", score: 126 },
    { name: "Joseth", score: 125 },
    { name: "Victoria", score: 125 },
    { name: "Yennifer", score: 122 },
    { name: "Diego", score: 122 },
    { name: "Betania", score: 120 },
    { name: "Evelyn", score: 120 },
    { name: "Sofía", score: 112 },
    { name: "Camila", score: 112 },
    { name: "Deisiris", score: 111 },
    { name: "Sarahí", score: 111 },
    { name: "Sr José", score: 109 },
    { name: "Cevimar", score: 106 },
    { name: "Yovany", score: 98 },
    { name: "Doris", score: 96 },
    { name: "Franco", score: 96 },
    { name: "Yuvy", score: 96 },
    { name: "Ziomara", score: 93 },
    { name: "Ivan", score: 89 },
    { name: "Muñeca", score: 80 },
    { name: "Alfaro", score: 71 },
    { name: "Pedro", score: 65 },
    { name: "Sr. África", score: 65 },
    { name: "Melisa", score: 65 },
    { name: "Fanny", score: "🫠🙃" },
    { name: "Beatriz", score: "🫣" },
  ];

  // Identificar los 3 niveles de puntuación más altos
  const numericScores = rawData
    .map(d => d.score)
    .filter((s): s is number => typeof s === 'number')
    .sort((a, b) => b - a);
  
  const uniqueScores = Array.from(new Set(numericScores));
  const goldScore = uniqueScores[0];
  const silverScore = uniqueScores[1];
  const bronzeScore = uniqueScores[2];

  // Función para obtener estilo de medalla
  const getMedalStyle = (score: string | number) => {
    if (typeof score !== 'number') return 'bg-neutral-800 text-neutral-500';
    if (score === goldScore) return 'bg-[#FFD700] text-black shadow-[0_0_15px_rgba(255,215,0,0.5)]';
    if (score === silverScore) return 'bg-[#C0C0C0] text-black shadow-[0_0_15px_rgba(192,192,192,0.4)]';
    if (score === bronzeScore) return 'bg-[#CD7F32] text-black shadow-[0_0_15px_rgba(205,127,50,0.4)]';
    return 'bg-neutral-800 text-neutral-400';
  };

  return (
    <Section id="leaderboard" title="Leaderboard Interno">
      <div className="max-w-5xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-end border-b-4 border-accent pb-4 gap-4">
        <div>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
            C4 <span className="text-accent">GAMES</span>
          </h3>
          <p className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs mt-2">
            Workout of the Day
          </p>
        </div>
        <div className="text-right">
          <p className="text-support font-black uppercase italic text-xl md:text-2xl tracking-tighter">
            17 ABR <span className="text-accent">2026</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-neutral-900">
          {/* Primera Columna (Top 1-18) */}
          <div className="divide-y divide-neutral-900">
            {rawData.slice(0, 18).map((athlete, index) => {
              const isNumeric = typeof athlete.score === 'number';
              const medalStyle = getMedalStyle(athlete.score);
              
              return (
                <div 
                  key={athlete.name} 
                  className="group flex items-center px-4 md:px-6 py-4 hover:bg-neutral-900/50 transition-all duration-300"
                >
                  <div className="w-12">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black italic text-sm ${medalStyle}`}>
                      {isNumeric ? index + 1 : '-'}
                    </div>
                  </div>
                  <div className="flex-1 px-4">
                    <h4 className="text-base md:text-lg font-black uppercase italic tracking-tight group-hover:text-accent transition-colors truncate">
                      {athlete.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg md:text-xl font-black italic tracking-tighter ${isNumeric ? 'text-accent' : 'text-support/50'}`}>
                      {athlete.score}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Segunda Columna (Resto) */}
          <div className="divide-y divide-neutral-900 border-t lg:border-t-0 border-neutral-900">
            {rawData.slice(18).map((athlete, index) => {
              const isNumeric = typeof athlete.score === 'number';
              const medalStyle = getMedalStyle(athlete.score);
              const actualIndex = index + 18;
              
              return (
                <div 
                  key={athlete.name} 
                  className="group flex items-center px-4 md:px-6 py-4 hover:bg-neutral-900/50 transition-all duration-300"
                >
                  <div className="w-12">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black italic text-sm ${medalStyle}`}>
                      {isNumeric ? actualIndex + 1 : '-'}
                    </div>
                  </div>
                  <div className="flex-1 px-4">
                    <h4 className="text-base md:text-lg font-black uppercase italic tracking-tight group-hover:text-accent transition-colors truncate">
                      {athlete.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg md:text-xl font-black italic tracking-tighter ${isNumeric ? 'text-accent' : 'text-support/50'}`}>
                      {athlete.score}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-neutral-600 font-bold uppercase italic text-[10px] tracking-[0.2em]">
          King7 Boxcross Competencia Interna // Actualizado en Tiempo Real
        </p>
      </div>
    </Section>
  );
};
