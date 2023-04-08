import DownloadIcon from '@mui/icons-material/Download';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { getYifyApiMagnetUrl, YifyApiMovieTorrent } from '../core';
import { MagnetIcon } from './icons';

const formatTorrentType = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'web':
      return type.toUpperCase();
    case 'bluray':
      return 'BluRay';
    default:
      return type;
  }
};

export interface MovieDownloadDialogProps {
  isOpen: boolean;
  torrents: YifyApiMovieTorrent[];
  onClose: () => void;
}

export function MovieDownloadDialog({
  isOpen,
  torrents,
  onClose,
}: MovieDownloadDialogProps) {
  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} open={isOpen}>
      <DialogTitle
        sx={{
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4" fontWeight={500}>
          Select Movie Quality
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 6 }}>
        <Box display="flex" gap={8} flexWrap="wrap" justifyContent="center">
          {torrents.map((torrent) => {
            return (
              <Stack spacing={2} alignItems="center" key={torrent.hash}>
                <Typography
                  fontWeight={500}
                  color="grey"
                  variant="h4"
                  component="h4"
                >
                  {torrent.quality}
                </Typography>
                <Typography fontWeight={500} variant="h5" component="h5">
                  {formatTorrentType(torrent.type)}
                </Typography>
                <Typography
                  color="grey"
                  fontWeight={500}
                  variant="h5"
                  component="h5"
                >
                  {torrent.size}
                </Typography>
                <Typography variant="h6">
                  Seeds:{' '}
                  <Typography
                    variant="h6"
                    fontWeight="500"
                    component="span"
                    color="success.main"
                  >
                    {torrent.seeds}
                  </Typography>
                </Typography>
                <Typography variant="h6">
                  Peers:{' '}
                  <Typography
                    variant="h6"
                    fontWeight="500"
                    component="span"
                    color="error.main"
                  >
                    {torrent.peers}
                  </Typography>
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href={torrent.url}
                  target="_blank"
                >
                  Download
                </Button>
                <IconButton
                  href={getYifyApiMagnetUrl(torrent)}
                  component="a"
                  size="large"
                >
                  <MagnetIcon />
                </IconButton>
              </Stack>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
