import './App.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ThemeProvider } from "@/components/theme-provider"
import { Tablero } from './components/ui/Tablero'
import { ModeToggle } from './components/ui/mode-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Card>
        <CardHeader>
          <ModeToggle />
          <CardTitle>Tic Tac Toe</CardTitle>
          <CardDescription>Stack: TypeScript + Shadcn/UI + React </CardDescription>
        </CardHeader>
        <CardContent>
          <Tablero />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default App
