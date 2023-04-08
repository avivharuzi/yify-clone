import {
  Avatar,
  ButtonBase,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import { getImdbCharacterUrl, YifyApiMovieCastPerson } from '../core';

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
              <Link
                href={getImdbCharacterUrl(person.imdb_code)}
                target="_blank"
                rel="noreferrer"
              >
                <ButtonBase>
                  <Avatar alt={person.name} src={person.url_small_image} />
                </ButtonBase>
              </Link>
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
