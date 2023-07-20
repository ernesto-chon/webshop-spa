import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const AuthDetails: React.FC = () => {
  const [authUser, setAuthUser] = useState<any | null>(null); // TODO: change any

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="my-10 text-center">
      {authUser ? (
        <>
          <p>Signed in</p>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={userSignOut}>
            Sign out
          </button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  )
}

export default AuthDetails
