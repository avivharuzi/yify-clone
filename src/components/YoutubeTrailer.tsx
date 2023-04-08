import { useState } from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';

import { YoutubeDialog } from './YoutubeDialog';

export interface YoutubeTrailerProps {
  youtubeId: string;
}

export function YoutubeTrailer({ youtubeId }: YoutubeTrailerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        startIcon={<PlayArrowIcon />}
        variant="contained"
        color="secondary"
        onClick={() => setIsOpen(true)}
      >
        Play Trailer
      </Button>
      <YoutubeDialog
        isOpen={isOpen}
        youtubeId={youtubeId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
