'use client'

import { useQuery } from '@tanstack/react-query'

import fetcher from '@/lib/fetcher'
import { BASE_URL } from '@/lib/base-url'

const useUser = (username: string) => {
	const url = username ? `${BASE_URL}/api/users/${username}` : null
	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['user', username],
		queryFn: () =>
			url ? fetcher(url) : Promise.reject('No username provided'),
		enabled: !!url,
	})
	return {
		data,
		error,
		isLoading,
		refetch,
	}
}

export default useUser
