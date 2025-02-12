import React, { useEffect, useState } from 'react'
import useEcomStore from '../store/ecomStore'
import { currentUser } from '../api/auth'
import Loading from './Loading'

const ProtectUser = ({element}) => {
  const [ok, setOk] = useState(false)
  const user = useEcomStore((state) => state.user)
  const token = useEcomStore((state) => state.token)

  useEffect(() => {
    if (user && token) {
      //send to back
      currentUser(token)
        .then((res) => setOk(true))
        .catch((err) => setOk(false))
    }
  }, [])

  return ok ? element : <Loading/>
}

export default ProtectUser
