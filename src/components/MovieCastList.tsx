import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import { YifyApiMovieCastPerson } from '../core';

export interface MovieCastListProps {
  cast: YifyApiMovieCastPerson[];
}

export function MovieCastList({ cast }: MovieCastListProps) {
  return (
    <List>
      {cast.map((person) => {
        return (
          <ListItem key={person.imdb_code}>
            <ListItemAvatar>
              <Avatar alt={person.name} src={person.url_small_image} />
            </ListItemAvatar>
            <ListItemText
              primary={person.name}
              secondary={person.character_name}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
