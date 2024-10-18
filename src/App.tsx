import { ProfilesGitHubProvider } from './contexts/ProfilesGitHub.tsx'
import { Router } from './routes.tsx'

function App() {
  return (
    <ProfilesGitHubProvider>
      <div
        className='py-4 px-4 mw-100 h-100'
        data-bs-theme="dark"
      >
        <Router />
      </div>
    </ProfilesGitHubProvider>
  )
}

export default App
