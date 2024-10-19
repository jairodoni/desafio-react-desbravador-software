import { createContext, ReactNode, useState } from 'react';

interface User {
  nickname: string
  name: string
  avatarUrl: string
  followers: number
  following: number
  email: string
  bio: string
}

interface Repository {
  nameRepository: string
  stars: number
  technology: string
  description: string
  linkRepository: string
  lastUpdateDate: Date
}

interface ProfilesGitHubContextData {
  user: User | object
  setUser: (user: User | object) => void
  repositories: Repository[]
  setRepositories: (repositories: Repository[]) => void
  repositorySelected: Repository
  setRepositorySelected: (repository: Repository) => void
}

interface ProfilesGitHubProviderProps {
  children: ReactNode
}

export const ProfilesGitHubContext = createContext({} as ProfilesGitHubContextData)

export function ProfilesGitHubProvider({ children }: ProfilesGitHubProviderProps) {
  const [user, setUser] = useState<User | object>({});
  const [repositories, setRepositories] = useState<Repository[] | []>([])
  const [repositorySelected, setRepositorySelected] = useState<Repository>({})

  return (
    <ProfilesGitHubContext.Provider
      value={{
        user,
        setUser,
        repositories,
        setRepositories,
        repositorySelected,
        setRepositorySelected
      }}
    >
      {children}
    </ProfilesGitHubContext.Provider>
  )
}