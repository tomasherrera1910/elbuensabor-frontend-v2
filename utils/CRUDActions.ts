const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3001'

export async function getInfo (path: string, token?: string) {
  const url = `${BASE_URL}/${path}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token ?? ''}`
    }
  })
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  }
  const data = await response.json()
  return data
}
export async function postInfo (path: string, token?: string, body?: any) {
  const url = `${BASE_URL}/${path}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token ?? ''}`
    },
    body: JSON.stringify(body)
  })
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  }
  const data = await response.json()
  return data
}

export async function editInfo (path: string, token?: string, body?: any) {
  const url = `${BASE_URL}/${path}`
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token ?? ''}`
    },
    body: JSON.stringify(body)
  })
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  }
  const data = await response.json()
  return data
}

export async function deleteInfo (path: string, token?: string) {
  const url = `${BASE_URL}/${path}`
  console.log({ url })
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token ?? ''}`
    }
  })

  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  } else {
    return 'ok'
  }
}
