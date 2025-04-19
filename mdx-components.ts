import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog' // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
import { ComponentType } from 'react'

export function useMDXComponents(
  components?: Record<string, ComponentType<any>>,
) {
  return {
    ...themeComponents,
    ...components,
  }
}
