import { Skeleton, Stack } from '@mui/material'

export default function SkeletonUserList ({ loading }: { loading: boolean }) {
  if (!loading) {
    return null
  }
  return (
    <Stack gap={2}>
      {
        Array.from(new Array(12)).map((_, idx) => (
          <Stack key={idx} flexDirection='row' justifyContent='space-between' gap={2} paddingX={2}>
            <Skeleton variant='rectangular' sx={{ flexGrow: 1, maxWidth: 240 }} />
            <Skeleton variant='rectangular' width={100} />
          </Stack>
        ))
    }
    </Stack>
  )
}
