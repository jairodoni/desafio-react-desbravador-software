import { useContext } from 'react';
import { ProfilesGitHubContext } from '../contexts/ProfilesGitHub';

export const useProfileGitHub = () => {
  return useContext(ProfilesGitHubContext);
}