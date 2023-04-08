import { Dialog } from '@mui/material';

import { getYoutubeEmbedUrl } from '../core';

export interface YoutubeDialogProps {
  isOpen: boolean;
  youtubeId: string;
  onClose: () => void;
}

export function YoutubeDialog({
  isOpen,
  youtubeId,
  onClose,
}: YoutubeDialogProps) {
  const youtubeUrl = getYoutubeEmbedUrl(youtubeId);

  return (
    <Dialog fullWidth maxWidth="lg" onClose={onClose} open={isOpen}>
      <iframe
        src={youtubeUrl}
        width="100%"
        height="500px"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Dialog>
  );
}
