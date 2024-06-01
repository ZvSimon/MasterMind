import { Button } from '../components/ui/button';
import { useTheme } from '../components/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" size="icon" className="ghost" onClick={toggleTheme}>
      <Sun
        className={`h-[1.1rem] w-[1.2rem] transition-all ${
          currentTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`}
      />
      <Moon
        className={`absolute h-[1.1rem] w-[1.2rem] transition-all ${
          currentTheme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
