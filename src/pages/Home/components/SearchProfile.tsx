import { useProfileGitHub } from "../../../hooks/useProfileGitHub";
import { z } from '../../../utils/pt-zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";

const searchUserFormSchema = z.object({
  nameProfile: z.string().max(30),
})

type SearchUserFormSchema = z.infer<typeof searchUserFormSchema>

export function SearchProfile() {
  const { setUser } = useProfileGitHub()

  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<SearchUserFormSchema>({
      resolver: zodResolver(searchUserFormSchema),
      defaultValues: {
        nameProfile: '',
      },
    })



  async function handleSearchProfileOnGitHub(data: SearchUserFormSchema) {
    const { nameProfile } = data

    if (nameProfile.trim() === '') {
      return;
    }

    setUser({})

    const user = await api.get(`/users/${nameProfile}`);

    if (user.status === 200) {
      const userFormated = {
        nickname: user.data.login,
        name: user.data.name,
        avatarUrl: user.data.avatar_url,
        followers: user.data.followers,
        following: user.data.following,
        email: user.data.email,
        bio: user.data.bio
      }

      setUser(userFormated)
    }

    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchProfileOnGitHub)}
      className="bg-dark d-flex flex-column border border-light-subtle border-4
    d-flex w-100 rounded-3 my-2 ms-2 me-1 p-4"
    >
      <span id="inputGroup-sizing-default" className="mb-2 fw-bold fs-5">Busque um perfil</span>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control fs-5"
          placeholder="ex: jorge"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          {...register('nameProfile')}
        />
        <button
          className="btn btn-secondary fs-5 fw-bold"
          type="submit"
          disabled={isSubmitting}
          id="button-addon2"
          style={{ width: "100px" }}
        >
          {!isSubmitting && <>Buscar</>}

          {isSubmitting &&
            (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
          }
        </button>
      </div>
      {!!errors.nameProfile && (
        <span className="fw-medium text-danger fs-6">
          {errors.nameProfile.message}
        </span>
      )}
    </form>
  );
}