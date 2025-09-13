import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return <header>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
}
//we want to user created or deleted in sync with the database-->use inngest
//when user.created => inngest will create the user in mongodb
//when user.deleted => inngest will delete the user in mongodb
export default App