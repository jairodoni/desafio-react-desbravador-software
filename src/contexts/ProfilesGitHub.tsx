import { createContext, ReactNode, useState } from 'react';

interface User {
  name: string
  avatar_url: string
  followers: number
  following: number
  email: string
  bio: string
}

interface ProfilesGitHubContextData {
  user: User | object
  setUser: (user: User | object) => void
}

interface ProfilesGitHubProviderProps {
  children: ReactNode
}

export const ProfilesGitHubContext = createContext({} as ProfilesGitHubContextData)

export function ProfilesGitHubProvider({ children }: ProfilesGitHubProviderProps) {
  const [user, setUser] = useState<User | object>({});

  return (
    <ProfilesGitHubContext.Provider value={{ user, setUser }}>
      {children}
    </ProfilesGitHubContext.Provider>
  )
}