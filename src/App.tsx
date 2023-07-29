import { Button } from "./components/Button";

export function App() {
  return (
    <div className="flex h-screen items-center justify-center gap-6 bg-zinc-950 text-zinc-50 flex-col">
      <Button success className="w-20">Sign in</Button>
      <Button size="sm">Sign in</Button>
      <Button size="xs">Sign in</Button>
      <Button>Sign in</Button>
      <Button>Sign in</Button>
    </div>
  )
}

