"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IThemeProviderProps
  extends React.ComponentProps<typeof NextThemesProvider> {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: IThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
