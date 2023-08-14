import { Button, ButtonGroup, Label } from '@blueprintjs/core';
import React from 'react';

export type Size = 'small' | 'regular' | 'large';

export interface SizeSelectProps {
  label?: string;
  size: Size;
  optionLabels: [string, string, string];
  onChange: (size: Size) => void;
}

export const SizeSelect: React.FC<SizeSelectProps> = ({ label, size, optionLabels, onChange }) => {
  const handleSmall = React.useCallback(() => onChange('small'), [onChange]);
  const handleRegular = React.useCallback(() => onChange('regular'), [onChange]);
  const handleLarge = React.useCallback(() => onChange('large'), [onChange]);

  return (
    <Label>
      {label}
      <ButtonGroup fill={true} style={{ marginTop: 5 }}>
        <Button active={size === 'small'} text={optionLabels[0]} onClick={handleSmall} />
        <Button active={size === 'regular'} text={optionLabels[1]} onClick={handleRegular} />
        <Button active={size === 'large'} text={optionLabels[2]} onClick={handleLarge} />
      </ButtonGroup>
    </Label>
  );
};

SizeSelect.defaultProps = {
  label: 'Size',
  optionLabels: ['Small', 'Regular', 'Large'],
};

export function getSizeProp(size: Size) {
  switch (size) {
    case 'large':
      return { large: true };
    case 'small':
      return { small: true };
    default:
      // regular is the default
      return {};
  }
}
