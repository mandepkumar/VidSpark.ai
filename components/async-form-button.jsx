import React from 'react';
import { Button } from './ui/button';

const AsyncFormButton = ({ children, action, ...props }) => {
  if (!action) return '';
  return (
    <form action={action}>
      <Button {...props} type="submit">
        {children}
      </Button>
    </form>
  );
};

export default AsyncFormButton;
