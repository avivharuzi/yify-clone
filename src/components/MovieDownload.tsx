import { useState } from 'react';

import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';

import { YifyApiMovieTorrent } from '../core';
import { MovieDownloadDialog } from './MovieDownloadDialog';

export interface MovieDownloadProps {
  isPrimary?: boolean;
  torrents: YifyApiMovieTorrent[];
}

export const MovieDownload = ({
  isPrimary = false,
  torrents,
}: MovieDownloadProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        startIcon={<DownloadIcon />}
        onClick={() => setIsOpen(true)}
        size="small"
        color="primary"
        variant={isPrimary ? 'contained' : 'text'}
        fullWidth={isPrimary}
      >
        Download
      </Button>
      <MovieDownloadDialog
        isOpen={isOpen}
        torrents={torrents}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
