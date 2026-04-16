import React from 'react';
import { Section } from './Section';

interface Athlete {
  name: string;
  score: string | number;
}

export const Leaderboard: React.FC = () => {
  const rawData: Athlete[] = [
    { name: "El Pony", score: 145 },
    { name: "Hecluimar", score: 145 },
    { name: "Leo P.", score: 145 },
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
      <div className="max-w-3xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-end border-b-4 border-accent pb-4 gap-4">
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
            16 ABR <span className="text-accent">2026</span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-neutral-900 px-6 py-4 flex justify-between items-center border-b border-neutral-800">
          <span className="text-neutral-500 font-black uppercase italic tracking-widest text-xs">Puesto</span>
          <span className="text-neutral-500 font-black uppercase italic tracking-widest text-xs">Atleta</span>
          <span className="text-neutral-500 font-black uppercase italic tracking-widest text-xs text-right">Score</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-neutral-900">
          {rawData.map((athlete, index) => {
            const isNumeric = typeof athlete.score === 'number';
            const medalStyle = getMedalStyle(athlete.score);
            
            return (
              <div 
                key={athlete.name} 
                className="group flex items-center px-6 py-4 hover:bg-neutral-900/50 transition-all duration-300"
              >
                {/* Position/Medal */}
                <div className="w-12">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black italic text-sm ${medalStyle}`}>
                    {isNumeric ? index + 1 : '-'}
                  </div>
                </div>

                {/* Name */}
                <div className="flex-1 px-4">
                  <h4 className="text-lg md:text-xl font-black uppercase italic tracking-tight group-hover:text-accent transition-colors">
                    {athlete.name}
                  </h4>
                </div>

                {/* Score */}
                <div className="text-right">
                  <span className={`text-xl md:text-2xl font-black italic tracking-tighter ${isNumeric ? 'text-accent' : 'text-support/50'}`}>
                    {athlete.score}
                  </span>
                </div>
              </div>
            );
          })}
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
