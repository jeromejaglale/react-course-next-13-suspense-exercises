import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import {range} from '@/utils.js';

async function VaporExercise() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>

      <div className="game-grid">        
		  {range(12).map((game) => (
			    <LibraryGameCardSkeleton />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
