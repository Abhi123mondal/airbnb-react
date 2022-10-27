import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../styles/midsection.css'

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack  direction="row" spacing={1}>
        <Chip label="Dates" variant="outlined" onClick={handleClick} />
        <Chip label="Group size" variant="outlined" onClick={handleClick} />
        <Chip label="More Filters" variant="outlined" onClick={handleClick} />
        <div class="vl"></div>
      <Chip label="Great for groups" onClick={handleClick} />
      <Chip label="Family-friendly" onClick={handleClick} />
      <Chip label="Animals" onClick={handleClick} />
      <Chip label="Arts & writing" onClick={handleClick} />
      <Chip label="Baking" onClick={handleClick} />
      <Chip label="Cooking" onClick={handleClick} />
      <Chip label="Dance" onClick={handleClick} />
      <Chip label="Drinks" onClick={handleClick} />
      <Chip label="Entertainment" onClick={handleClick} />
      <Chip label="Music" onClick={handleClick} />
      
    </Stack>
  );
}